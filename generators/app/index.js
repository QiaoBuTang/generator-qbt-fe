const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.projectName = args[0] || this.appname;
    this.projectDir = !!args[0] ? `${args[0]}/` : '';
  }

  prompting() {
    let done = this.async();

    this.log(yosay(`乔布简历前端脚手架`));

    this.description = '';
    this.repo = '';
    this.version = '0.0.1';
    this.author = 'QBT-fe';
    this.devPort = 3002;
    this.serverPort = 20002;

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'name of app: ',
        default: this.projectName
      },
      {
        type: 'input',
        name: 'description',
        message: 'description: ',
        default: this.description
      },
      {
        type: 'input',
        name: 'version',
        message: 'version: ',
        default: this.version
      },
      {
        type: 'input',
        name: 'repo',
        message: 'git repository: ',
        default: this.repo
      },
      {
        type: 'input',
        name: 'author',
        message: 'author: ',
        default: this.author
      },
      {
        type: 'input',
        name: 'devPort',
        message: 'port in development: ',
        default: this.devPort
      },
      {
        type: 'input',
        name: 'serverPort',
        message: 'port in server: ',
        default: this.serverPort
      }
    ];

    this.prompt(prompts).then((props) => {
      this.props = props;
      done();
    });
  }

  writing() {
    // get template path
    const templatePath = this.sourceRoot();

    // static config
    let dirList = ['bin', 'public', 'server', 'src', 'tools', 'webpack', '.babelrc', '.dockerignore', '.editorconfig', '.eslintrc', '.gitattributes', '.gitignore', '.npmrc', '.nvmrc', 'config.json', 'Dockerfile', 'package.json', 'README.md'];

    // custom config
    let customConfig = [
      {
        template: `${templatePath}/tools/devServer.js`,
        destination: '/tools/devServer.js',
        params: {devPort: this.props.devPort}
      },
      {
        template: `${templatePath}/tools/prodServer.js`,
        destination: '/tools/prodServer.js',
        params: {serverPort: this.props.serverPort}
      },
      {
        template: `${templatePath}/Dockerfile`,
        destination: 'Dockerfile',
        params: {serverPort: this.props.serverPort}
      },
      {
        template: `${templatePath}/package.json`,
        destination: 'package.json',
        params: {params: this.props}
      }
    ];

    // copy static config
    dirList.forEach((name) => {
      this.fs.copy(`${templatePath}/${name}`, this.projectDir + name);
    });

    // copy custom config
    customConfig.forEach((config) => {
      this.fs.copyTpl(
        this.templatePath(config.template),
        this.destinationPath(this.projectDir + config.destination),
        config.params
      );
    });
  }

  install() {

  }

  end() {
    this.log(yosay(
      `${chalk.yellow('搞定！可以开始写bug啦！')}`
    ));
  }
};