import env from '../user.config.js';

export const argvMode = Object.assign({}, env, {
    env: {
        production: process.env.NODE_ENV === 'production'
    },
    templateCache: true,
    minifyCss: false
});

export const {
    sourceFolder,
    developer,
    assets,
    FOLDER_BUILD: production,
    styleFileName,
    imageFolderName
} = argvMode;

export const loadPlugins = {
    pattern: ['gulp-*', 'gulp.*', 'browser-*', 'imagemin-*', 'main-*', 'run-*', 'require-*', 'stream-*', 'event-*', 'browser-sync', 'postcss-*', 'webpack', 'webpack-*', 'autoprefixer', 'del'],
    replaceString: /^gulp(-|\.)/,
    lazy: true,
    camelize: true
};

const templateDataFileName = '__snapshot-data-components__.json';
const scriptExt = argvMode.typeScript ? 'ts' : 'js';

const getTemplateExt = (() => {
    switch (argvMode.templatePreproc) {
        case 'pug':
            return 'pug';
        case 'nunjucks':
            return '{njk,html}';
        default:
            break;
    }

    return 'pug';
})();

const template = {
    src: [
        `${sourceFolder}/pages/**/[^_]*.${getTemplateExt}`,
        `!${sourceFolder}/**/{components,templates}/**/*.${getTemplateExt}`
    ],
    dataFileName: templateDataFileName,
    dataFiles: [
        `${sourceFolder}/components/**/*.json`,
        `!${sourceFolder}/components/**/${templateDataFileName}`
    ],
    distComponents: `${sourceFolder}/components/`,
    render: [
        `${sourceFolder}/pages`,
        `${sourceFolder}/pages/templates`,
        `${sourceFolder}/components`
    ],
    dist: `${developer}/`
};

const email = {
    src: `${sourceFolder}/emails`,
    filesSrc: `${sourceFolder}/emails/[^_]*.mjml`,
    dist: `${assets}/emails/`
};

const styles = {
    entry: `${sourceFolder}/styles/${styleFileName}.scss`,
    components: `${sourceFolder}/components/**/*.scss`,
    dist: `${assets}/css/`
};

const webpackPath = {
    entry: {
        main: `./${sourceFolder}/js/main.${scriptExt}`
    },
    output: `${assets}/js/`
};

const scriptsPath = {
    src: `${sourceFolder}/js/vendor`,
    dist: `${assets}/js/vendor/`
};

const imagesPath = {
    src: `${sourceFolder}/assets/${imageFolderName}`,
    spriteSrc: `${sourceFolder}/assets/${imageFolderName}/content/sprite`,
    spriteStylesDist: `${sourceFolder}/styles/include/plugins`,
    svgSrc: `${sourceFolder}/assets/${imageFolderName}/icons`,
    dist: `${assets}/${imageFolderName}/`
};

const filesPath = {
    src: `${sourceFolder}/assets/misc/**/*`,
    dist: `${developer}/`
};

const watchPath = {
    templates: [
        `${sourceFolder}/**/[^_]*.${getTemplateExt}`
    ],
    data: [
        `${sourceFolder}/components/**/*.json`,
        `!${sourceFolder}/components/**/${templateDataFileName}`
    ],
    email: `${sourceFolder}/emails/**/*.mjml`,
    css: `${sourceFolder}/{styles,components}/**/*.scss`,
    js: {
        src: [
            `${sourceFolder}/**/*.${scriptExt}`,
            `!${sourceFolder}/js/vendor/**`
        ],
        vendor: `${scriptsPath.src}/**/*.${scriptExt}`
    },
    sprite: `${imagesPath.src}/content/sprite/**/*.png`,
    svg: `${imagesPath.src}/icons/**/*.svg`,
    assets: `${sourceFolder}/assets/**/*.*`,
    files: `${sourceFolder}/assets/misc/**/*`
};

export {
    template,
    email,
    styles,
    webpackPath,
    scriptsPath,
    imagesPath,
    filesPath,
    watchPath
};
