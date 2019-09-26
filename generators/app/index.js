const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    const self = this;
    self.fs.copy(
        self.templatePath('conductor'),
        self.destinationPath(''),
    );
    self.fs.copy(
        self.templatePath('conductor/.babelrc'),
        self.destinationPath('.babelrc'),
    );
  }

  end() {
    this.npmInstall()
  }
};
