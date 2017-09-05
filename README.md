# Starter Template with Gulp
While I have been using Prepros for taking care of most of the stuff I need to do on my projects, but not everyone who watches my YouTube videos has, or wants to use Prepros, I thought using Gulp would be a better way to work.

#### This uses Gulp to do two things. 
The first is for development purposes. It will compile your Sass, and push any changes to a CSS, JS, or HTML file to your browser, so you don't have to refresh the page manually. 

The second is for deploying your site. It will move all your files to a distribution folder, and in the process it will autoprefix and minify your CSS, uglify your JS, and optimize your images.

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Requirements

To use this, you'll need to have npm on your system. If you do not have it installed, go to [node.js](https://nodejs.org/en/), download their installer and install it on your system.

### Using this for your projects

The steps for using this are all very simple, but do involve using the command line. If you've never used it before, don't be scared, it's super easy! 

#### 1. Download the files to your computer
1. Click **Clone or Download** on the GitHub page, and select Download ZIP
2. Unzip the folder, and move it to where you want work from
3. Rename the folder

#### 2. Open Terminal (Mac), Command Prompt (PC), or whatever command line interface you like best.

#### 3. cd to your project folder

#### 4. Initialize npm

```
npm install
```
This will install everything you need into your project folder in a folder called node_modules. **It will take a few minutes**, go stretch your legs, or get a coffee.

#### 5. When it is done, you have two options

1. You can watch your files. This will watch all your HTML, Sass/SCSS, and JS files for changes. It will compile your Sass/SCSS to CSS any time you save one of the files, and will refresh the browser automatically. Use this while you are working on your project.
```
gulp watch
```

2. This will get your site ready for deployment. It will move all of your files to the dist folder. In the process, it will uglify your JS, autoprefix and minify your CSS, and optimize all your images. Use this when you are done, and are ready to put your project out into the real world. Depending on how much it has to do, it's possible this might take a little while to finish.
```
gulp build
```

## License

This project is licensed under the MIT License
