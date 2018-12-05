# MSU-DOE Plant Research Laboratory Website - Custom Code
*This repository applies to the <a href="https://prl.natsci.msu.edu/">PRL website</a>, as hosted by the MSU College of Natural Sciences on Mura CMS. Although the PRL website has a pre-built design that is visually consistent with all websites within the College, it can contain custom content and styles between the header and footer areas. This repository has instructions for using the PRL custom code files. Each section below refers to its respective folder in the repository.*

*Modifying PRL's code requires: 1) some knowledge of programming languages (HTML, CSS, jQuery, and Javascript), 2) knowledge of Mura's back-end and front-end interfaces, 3) a code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>, and 4) a compiler, such as <a href="http://koala-app.com/">Koala</a>.*
<hr>

## CSS Folder
The CSS folder contains all custom stylesheets for the PRL website.
### Instructions to modify code:
*This section applies to the three files, prlCustomCSS-2018.scss, prlCustomCSS-2018.css, and prlCustomCSS-2018.min.css.*
 * **Custom modifications take place in the prlCustomCSS-2018.scss file, outside of Mura**. This is the core PRL custom styles file. It allows for control and consistency of custom visual components. It requires knowledge of SCSS programming language and a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>.
* **Use an automated compile and minimize system**, as Mura only reads .css files. Instructions:
  1. **prlCustomCSS-2018.scss** file should be compiled into the **prlCustomCSS-2018.css** file on each iteration. <a href="http://koala-app.com/">Koala</a> is a good automatic compiler.
  2. The **prlCustomCSS-2018.css** file should be minimized into the **prlCustomCSS-2018.min.css** file. This can be automatically done in code editors such as Visual Studio Code.
  3. Copy and paste the minimized code from the **prlCustomCSS-2018.min.css** file into Mura's dedicated custom CSS file. The dedicated file is found in Mura's File Manager, under *prl_User_Assets/File/websiteTheme/prlCustomCSS.css*. Right click **prlCustomCSS.css**, choose 'Edit,' and paste the code. Save your changes.
* **In Mura, do not change the name of the prlCustomCSS.css file.** Any name change will cause the server to not load the custom CSS.
* **Identical copies of the CSS files in this repository are also found on the PRL server.** Ensure that all versions are up to date.
### Note on PRL-about-page-timeline-jQuery-compiled.scss file:
The History Timeline on the <a href="https://prl.natsci.msu.edu/about/">About page</a> rely on a CSS and jQuery timeline plugin called <a href="http://preview.codecanyon.net/item/zoomtimeline-css-timeline-pack/full_screen_preview/16918891?_ga=2.76863253.1076320330.1529523907-713049933.1525180595">ZoomTimeline</a> (<a href="http://digitalzoomstudio.net/">developer's site</a>), which allows for a wide range of visual presentation styles. The version on the PRL website adopts the 3d slider presentation mode. The **PRL-about-page-timeline-jQuery-compiled.scss** file includes all the package's core CSS files. The **prlCustomCSS-2018.scss** file automatically incorporates the contents of this file for upload to Mura. 

***Any style changes to the timeline should be made in the prlCustomCSS-2018.scss file, under the corresponding 'About' section**. The timeline is constantly updated by the developer, and as core files are overwritten, we lose any custom changes on update.

## HTML Folder
The HTML folder contains content used on the PRL website. **Identical copies of these files are also found on the PRL server. Ensure that all versions at all locations are up to date.**
### File listing:
* **PRL-about-page.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/about/">About page</a>.
* **PRL-CAAPP-overview-page.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/research-tech/center-for-advanced-algal-and-plant-phenotyping/">CAAPP Overview page</a>.
* **PRL-graduate-program-overview-page.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/graduate-program/graduate-program-overview/">Graduate Program Overview Page</a>.
* **PRL-card-markup.html:** This is the markup for all the PRL card styles. It is also found on the PRL <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-style-guide/">Brand Style Guide page</a> under the *Cards* section.
* **PRL-research-projects-page.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/research-tech/research-projects/">Research Projects Page</a>.
* **PRL-brand-style-guide-markup.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-style-guide/">Brand Style Guide page</a>.
* **PRL-homepage-brands-2018.html:** This content is used on the <a href="https://prl.natsci.msu.edu/">PRL homepage</a> in the section right below the hero image and right before the News section.
  * Any changes should be made in this file on a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>, and not in Mura. The reason is that Mura's HTML editor is messy and difficult to work on.
  * To update the content in Mura, paste the code from this file in the **Homepage - Brands Section** component, which can be located in Mura's File Manager.
  * To update the Featured Research content (right side of this section, as seen on a desktop), modify the **Homepage - Brands Section - Featured Research** component **in Mura**. There is no external HTML file for this component.
* **PRL-homepage-news-events-2018.html:** This content is used on the <a href="https://prl.natsci.msu.edu/">PRL homepage</a> in the section right below the Brands section.
  * Any changes should be made in this file on a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>, and not in Mura. The reason is that Mura's HTML editor is messy and difficult to work on.
  * To update the content in Mura, paste the code from this file in the **Homepage - News & Events** component, which can be located in Mura's File Manager.
 
## JS Folder
The JS folder contains the custom PRL jQuery code. 
### Instructions to modify code:
* **Custom modifications take place in the prlCustomJS.js file,  outside of Mura**. This is the core PRL custom JS file. It requires knowledge of JS and jQuery programming languages and a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>.
* **Copy and paste the contents from the prlCustomJS.js file into Mura's dedicated custom JS file**. The dedicated file is found in Mura's back File Manager, under *prl_User_Assets/File/websiteTheme/prlCustomJS.js*. Right click **prlCustomJS.js**, choose 'Edit,' and paste the code. Save your changes.
* **In Mura, do not change the name of the prlCustomJS.js file**. Any change will cause the server to not load the custom JS.
* **Identical copies of the JS files in this repository are also found on the PRL server.** Ensure that all versions are up to date.
