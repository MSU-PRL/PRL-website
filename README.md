# MSU-DOE Plant Research Laboratory Website - Custom Code
*This repository applies to the <a href="https://prl.natsci.msu.edu/">PRL website</a>, as hosted by the MSU College of Natural Sciences on Mura CMS. Although the PRL website has a pre-built design that is visually consistent with all websites within the College, it can contain custom content and styles between the header and footer areas. This repository has instructions for using the PRL custom code files. Each section below refers to its respective folder in the repository.*

*Modifying PRL's code requires: 1) some knowledge of programming languages (HTML, CSS, jQuery, and Javascript), 2) knowledge of Mura's back-end and front-end interfaces, 3) a code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>, and 4) a compiler, such as <a href="http://koala-app.com/">Koala</a>.*
<hr>

## CSS Folder
The CSS folder contains all custom stylesheets for the PRL website.
### Instructions to modify code:
*This section applies **only** to the three files, prlCustomCSS-2019.scss, prlCustomCSS-2019.css, and prlCustomCSS-2019.min.css. Ignore all files related to the jQuery timeline.* 
 * **Custom modifications take place in the prlCustomCSS-2019.scss file, outside of Mura**. This is the core PRL custom styles file. It allows for control and consistency of custom visual components. It requires knowledge of SCSS programming language and a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>.
* **Use an automated compile and minimize system**, as Mura only reads .css files. Ultimately, you should copy and paste the minimized code from the **prlCustomCSS-2019.min.css** file into Mura's dedicated custom CSS file. This file is found in Mura's File Manager, under *prl_User_Assets/File/websiteTheme/prlCustomCSS.css*. Right click **prlCustomCSS.css**, choose 'Edit,' and paste the code. Save your changes.
* **In Mura, do not change the name of the prlCustomCSS.css file.** Any change will cause the CSS to not load.
* **Identical copies of the CSS files in this repository are also found on the PRL server.** 
### Note on PRL-about-page-timeline-jQuery-compiled.scss file:
The History Timeline on the <a href="https://prl.natsci.msu.edu/about/">About page</a> rely on a CSS and jQuery timeline plugin called <a href="http://preview.codecanyon.net/item/zoomtimeline-css-timeline-pack/full_screen_preview/16918891?_ga=2.76863253.1076320330.1529523907-713049933.1525180595">ZoomTimeline</a> (<a href="https://zoomthe.me/knowledge-base/zoomtimeline/">knowledge base</a>/<a href="http://digitalzoomstudio.net/">developer's site</a>), which allows for a wide range of visual presentation styles. The version on the PRL website adopts the 3d slider presentation mode. The **PRL-about-page-timeline-jQuery-compiled.scss** file includes all the package's core CSS files, and the contents of this file are automatically incorporated in the **prlCustomCSS-2019.scss** file, for upload to Mura.

**Any custom CSS should be written into the prlCustomCSS-2019.scss file, under the  'About' section**. **Do not make changes** to the **PRL-about-page-timeline-jQuery-compiled.scss** file. As the timeline is still in development by the author, core files will be overwritten after each update. Any custom changes made to the core files will be lost as a result of the update process.

## HTML Folder
The HTML folder contains custom content for the PRL website. **Identical copies of these files are also found on the PRL server.**
 **Warning:** due to the way Mura's inline editor works, make sure to edit the .html files in an external code editor. Editing on the front-end might break certain features.
### .html file listing:
* **PRL-about-page.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/about/">About page</a>.
* **PRL-CAAPP-overview-page.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/research-tech/center-for-advanced-algal-and-plant-phenotyping/">CAAPP Overview page</a>.
* **PRL-graduate-program-overview-page.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/graduate-program/graduate-program-overview/">Graduate Program Overview page</a>.
* **PRL-card-markup.html:** This is the markup for all the PRL card styles. It is also found on the PRL <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-guides/communications-department-resources/web-components-demo/">Web Components Demo page</a> under the *Cards* section.
* **PRL-research-projects-page.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/research-tech/research-projects/">Research Projects Page</a>.
* **PRL-community-brand-toolkit.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-guides/prl-community-brand-toolkit/">PRL Community Brand Toolkit page</a>.
* **PRL-web-components-demo.html:** This is the markup for the <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-guides/communications-department-resources/web-components-demo/">Web Components Demo page</a>.
* **PRL-homepage-brands-2018.html:** This content is used on the <a href="https://prl.natsci.msu.edu/">PRL homepage</a> in the section right below the hero image and right before the News section.
  * To update the content in Mura, paste the code from this file in the **Homepage - Brands Section** component, which can be located in Mura's File Manager.
  * To update the Featured Research content (right side of this section, as seen on a desktop), modify the **Homepage - Brands Section - Featured Research** component **in Mura**. There is no external HTML file for this component.
* **PRL-homepage-news-events-2018.html:** This content is used on the <a href="https://prl.natsci.msu.edu/">PRL homepage</a> in the section right below the Brands section.
  * To update the content in Mura, paste the code from this file in the **Homepage - News & Events** component, which can be located in Mura's File Manager.
* **PRL-Code-of-Ethics.html:** This page was added in November 2019. The content is used on the <a href="https://prl.natsci.msu.edu/about/internal-resources/employee-documents/code-of-ethics/">Code of Ethics page</a>.
 
## JS Folder
The JS folder contains the custom PRL jQuery code. 
### Instructions to modify code:
* **Custom modifications take place in the prlCustomJS.js file,  outside of Mura**. This is the core PRL custom JS file.
* **Copy and paste the contents from the prlCustomJS.js file into Mura's dedicated custom JS file**. The dedicated file is found in Mura's back File Manager, under *prl_User_Assets/File/websiteTheme/prlCustomJS.js*. Right click **prlCustomJS.js**, choose 'Edit,' and paste the code. Save your changes.
* **In Mura, do not change the name of the prlCustomJS.js file**. Any change will cause the JS to not load.
* **Identical copies of the JS files in this repository are also found on the PRL server.** Ensure that all versions are up to date.
