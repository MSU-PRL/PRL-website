# MSU-DOE Plant Research Laboratory Website - Custom Code
*This repository applies to the <a href="https://prl.natsci.msu.edu/">PRL website</a>, as hosted by the MSU College of Natural Sciences on Mura CMS. Although the PRL website has a pre-built design that is visually consistent with all websites within the College, it can contain custom content and styles between the header and footer areas. This repository has instructions for using the PRL custom code files. Each section below refers to its respective folder in the repository.*

*Modifying PRL's code requires: 1) some knowledge of programming languages (HTML, CSS, and Javascript), 2) knowledge of Mura's back-end and front-end interfaces, 3) a code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>, and 4) a compiler, such as <a href="http://koala-app.com/">Koala</a>.*
<hr>

## CSS Folder
### How to modify CSS:
*This section applies **only** to the three files, prlCustomCSS-2019.scss, prlCustomCSS-2019.css, and prlCustomCSS-2019.min.css. Ignore all files related to the jQuery timeline.* 
 * **Custom styles are written in the prlCustomCSS-2019.scss file**. This is the core styles file, written in SCSS. SCSS allows for consistent visual components.
* **Compile and minimize the SCSS file into prlCustomCSS-2019.min.css**.
* **Copy and paste the code from the minimized file into Mura's dedicated custom CSS file, called  prlCustomCSS.css**. This file is found in Mura's File Manager, under *prl_User_Assets/File/websiteTheme/prlCustomCSS.css*. Right click on it, choose 'Edit', paste the code, and save your changes.
* **Do not change the name of the prlCustomCSS.css file in Mura**. Otherwise, CSS will not load.
* **CSS files in this repository are also found on the PRL server.** 
### Note on PRL-about-page-timeline-jQuery-compiled.scss file:
The History Timeline on the <a href="https://prl.natsci.msu.edu/about/">About page</a> is a jQuery timeline plugin called <a href="http://preview.codecanyon.net/item/zoomtimeline-css-timeline-pack/full_screen_preview/16918891?_ga=2.76863253.1076320330.1529523907-713049933.1525180595">ZoomTimeline</a> (<a href="https://zoomthe.me/knowledge-base/zoomtimeline/">knowledge base</a>/<a href="http://digitalzoomstudio.net/">developer's site</a>), which allows for multiple presentation styles. The PRL version adopts the 3d slider presentation mode. The **PRL-about-page-timeline-jQuery-compiled.scss** file includes all the package's core CSS files, which are automatically incorporated in the **prlCustomCSS-2019.scss** file.

**Do not make any changes to the PRL-about-page-timeline-jQuery-compiled.scss** file. For additional timeline styling, instead use the prlCustomCSS-2019.scss file, under the  'About' section. As the timeline is constantly updated by the developer, its core files are overwritten after each update. 

## HTML Folder
**Warning:** due to the way Mura's inline editor works, make sure to edit the .html files in an external code editor. Front-end editing might break certain features.
### .html file listing and links to web pages:
* **PRL-about-page.html:** <a href="https://prl.natsci.msu.edu/about/">About page</a>
* **PRL-CAAPP-overview-page.html:**  <a href="https://prl.natsci.msu.edu/research-tech/center-for-advanced-algal-and-plant-phenotyping/">CAAPP Overview page</a>
* **PRL-graduate-program-overview-page.html:**  <a href="https://prl.natsci.msu.edu/graduate-program/graduate-program-overview/">Graduate Program Overview page</a>
* **PRL-card-markup.html:** Markup for all the PRL card styles, also found on the PRL <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-guides/communications-department-resources/web-components-demo/">Web Components Demo page</a> under the *Cards* section.
* **PRL-research-projects-page.html:** <a href="https://prl.natsci.msu.edu/research-tech/research-projects/">Research Projects Page</a>
* **PRL-community-brand-toolkit.html:**  <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-guides/prl-community-brand-toolkit/">PRL Community Brand Toolkit page</a>
* **PRL-web-components-demo.html:**  <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-guides/communications-department-resources/web-components-demo/">Web Components Demo page</a>. Note that the accordion component will break if the markup is edited on the front-end.
* **PRL-homepage-brands-2018.html:**  <a href="https://prl.natsci.msu.edu/">PRL homepage</a> right below the hero section.
  * To update, paste the code in the **Homepage - Brands Section** component in Mura's File Manager.
  * To update the Featured Research content (right side of this section, as seen on a desktop), modify the **Homepage - Brands Section - Featured Research** component in Mura. This component does not have a HTML file.
* **PRL-homepage-news-events-2018.html:** <a href="https://prl.natsci.msu.edu/">PRL homepage</a> below the Brands section.
  * To update, paste the code in the **Homepage - News & Events** component in Mura's File Manager.
* **PRL-Code-of-Ethics.html:** <a href="https://prl.natsci.msu.edu/about/internal-resources/employee-documents/code-of-ethics/">Code of Ethics page</a>
 
## JS Folder 
### Instructions to modify JS:
* **Custom JS is written in the prlCustomJS.js file**. This file is found in this repository and the PRL server.
* **Copy and paste the code into Mura's dedicated custom JS file, also called prlCustomJS.js**. This file is found in Mura's File Manager, under *prl_User_Assets/File/websiteTheme/prlCustomJS.js*. Right click on it, choose 'Edit', paste the code, and save your changes.
* **Do not change the name of the prlCustomJS.js file in Mura**. Otherwise, the JS will not load.