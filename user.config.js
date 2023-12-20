const env = {
    'PROJECT_VERSION': null, // "1.0"
    'BACKUP': false,
    'EMAILS_BUILD': false,
    'FOLDER_BUILD': 'build',
    'SERVER_INDEX_PAGE': 'index.html',
    'OPTIMIZE_IMAGES': false,
    'PNG_OPTIMIZE': false,
    'PNG_SPRITE': false,
    typeScript: false,
    sourcemaps: true,
    sourceFolder: 'src',
    developer: 'dev',
    assets: 'dev/assets',
    imageFolderName: 'img',
    styleFileName: 'main',
    templatePreproc: 'pug', // Values 'pug' or 'nunjucks'
    templateLocals: {
        symbolsInject: false,
        pathPrefix: '__static__'
    },
    styles: {
        pathPrefix: '__static__'
    },
    prettify: {
        'indent_char': ' ',
        'indent_size': 4,
        'indent_level': 1,
        'preserve_newlines': true,
        'max_preserve_newlines': 1
    },
    htmlMinify: false
};

export default env;
