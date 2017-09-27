const gulp = require('gulp');

const babel = require('gulp-babel');
const cssSlam = require('css-slam').gulp;
const del = require('del');
const gulpif = require('gulp-if');
const htmlMinifier = require('gulp-htmlmin');
const HtmlSplitter = require('polymer-build').HtmlSplitter;
const mergeStreams = require('merge-stream');
const PolymerProject = require('polymer-build').PolymerProject;
const uglify = require('gulp-uglify');
const workbox = require('workbox-build');

gulp.task('default', ['build'], () => {
  // Generate Service Worker (from /sw.js)
  workbox.injectManifest({
    globDirectory: 'build/default/',
    globPatterns: [
      '**/*'
    ],
    swDest: 'build/default/sw.js',
    swSrc: 'sw.js'
  });
});

gulp.task('build', ['clean'], () => {
  const project = new PolymerProject(require('./polymer.json'));
  const sourcesHtmlSplitter = new HtmlSplitter();

  // Combine sources and dependencies
  const stream = mergeStreams(project.sources(), project.dependencies());

  // Transform code
  stream
    .pipe(sourcesHtmlSplitter.split())
    .pipe(gulpif(/\.css$/, cssSlam({
      stripWhitespace: true
    })))
    .pipe(gulpif(/\.html$/, cssSlam({
      stripWhitespace: true
    })))
    .pipe(gulpif(/\.html$/, htmlMinifier({
      collapseWhitespace: true,
      removeComments: true
    })))
    .pipe(gulpif(/\.js$/, babel({ presets: ['es2015'] })))
    .pipe(gulpif(/\.js$/, uglify()))
    .pipe(sourcesHtmlSplitter.rejoin())
    .pipe(project.addCustomElementsEs5Adapter())
    .pipe(gulp.dest('build/default/'))
    ;

  // Copy Web Components polyfills
  gulp.src('bower_components/webcomponentsjs/*ents*.js')
  .pipe(gulp.dest('build/default/bower_components/webcomponentsjs/'));

  // Copy Workbox files
  gulp.src('workbox-sw*')
  .pipe(gulp.dest('build/default/'));

  return stream;
});

gulp.task('clean', () => {
  return del([
    'build/'
  ]);
});
