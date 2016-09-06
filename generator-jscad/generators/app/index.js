'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },
  prompting: function () {
    var done = this.async();

    console.log('config', this.config.getAll());

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the phenomenal ' + chalk.red('generator-jscad') + ' generator!'
    ));

    var prompts = [{
      name: 'name',
      message: 'Your project name',
      default: this.config.get('name') || path.basename(process.cwd())
    }, {
      name: 'description',
      message: 'Description',
      default: this.config.get('description')
    }, {
      name: 'author',
      message: 'Author',
      default: this.config.get('author')
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      // To access props later use this.props.someOption;
      this.config.set('name', this.props.name);
      this.config.set('description', this.props.description);
      this.config.set('author', this.props.author);

      done();
    }.bind(this));
  },

  writing: {
    gulpfile: function () {
      this.fs.copyTpl(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js'), {
          name: this.props.name,
          description: this.props.description,
          author: this.props.author,
          nameslug: _.camelCase(this.props.name)
        }
      );
    },
    eslintrc: function () {
      this.fs.copy(
        this.templatePath('.eslintrc.json'),
        this.destinationPath('.eslintrc.json')
      );
    },
    packageJSON: function () {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name,
          description: this.props.description,
          author: this.props.author,
          nameslug: _.camelCase(this.props.name)
        }
      );
    },
    readme: function () {
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'), {
          name: this.props.name,
          description: this.props.description,
          author: this.props.author,
          nameslug: _.camelCase(this.props.name)
        }
      );
    },
    main: function () {
      this.fs.copyTpl(
        this.templatePath('main.jscad'),
        this.destinationPath(this.props.name + '.jscad'), {
          name: this.props.name,
          description: this.props.description,
          author: this.props.author,
          nameslug: _.camelCase(this.props.name)
        }
      );
    }
  },

  install: function () {
    this.npmInstall();
  }
});
