# PRL Website - Custom Code
*This repository applies to the <a href="https://prl.natsci.msu.edu/">PRL website</a>, as hosted by the MSU College of Natural Sciences on Mura CMS. Although the PRL website has a pre-built design that is visually consistent with all websites within the College, it can contain custom content and styles between the header and footer areas. This repository has instructions for using the PRL custom code files. Each section below refers to its respective folder in the repository.*
<hr>

## CSS Folder
The CSS folder contains all custom stylesheets for the PRL website.
### Instructions to modify code:
 * **Custom modifications take place in the prlCustomCSS-2018.scss file, outside of Mura**. This is the core PRL custom CSS file. It contains variables that allow for control and consistency of custom visual components. It requires knowledge of SCSS programming language and a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>.
* **Use an automated compile and minimize system**, as Mura only reads .css files. Instructions:
  1. **prlCustomCSS-2018.scss** file should be automatically compiled into the **prlCustomCSS-2018.css** file on each iteration. <a href="http://koala-app.com/">Koala</a> is a good compiler.
  2. The **prlCustomCSS-2018.css** file should be automatically minimized into the **prlCustomCSS-2018.min.css** file. This can be done in code editors such as Visual Studio Code.
  3. Copy and paste the minimized code from the **prlCustomCSS-2018.min.css** file into Mura's dedicated custom CSS file. The dedicated file is found in Mura's File Manager, under *prl_User_Assets/File/websiteTheme/prlCustomCSS.css*. Right click **prlCustomCSS.css**, choose 'Edit,' and paste the code. Save your changes.
* **In Mura, do not change the name of the prlCustomCSS.css file.** Any change will cause the server to not load the custom CSS.
* **Identical copies of the CSS files in this repository are also found on the PRL server.** Ensure that all versions are up to date.

## HTML Folder
The HTML folder contains content used on the PRL website. **Identical copies of these files are also found on the PRL server. Ensure that all versions at all locations are up to date.**
### File listing:
* **homepage-brands-2018.html:** This content is used on the <a href="https://prl.natsci.msu.edu/">PRL homepage</a> in the section right below the hero image and right before the News section.
  * Any changes should be made in this file on a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>, and not in Mura. The reason is that Mura's HTML editor is messy and difficult to work on.
  * To update the content in Mura, paste the code from this file in the **Homepage Three Brands Section** component, which can be located in Mura's File Manager.
* **PRL-card-markup.html:** This is the markup for all the PRL card styles. It is also found on the PRL <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-style-guide/">Brand Style Guide page</a> under the *Cards* section.

## History Timeline Folder
The History Timeline folder contains a CSS and jQuery timeline plugin called <a href="http://preview.codecanyon.net/item/zoomtimeline-css-timeline-pack/full_screen_preview/16918891?_ga=2.76863253.1076320330.1529523907-713049933.1525180595">ZoomTimeline</a> (<a href="http://digitalzoomstudio.net/">developer's site</a>), which allows for a wide range of visual presentation styles. The version on the PRL website is located in the <a href="https://prl.natsci.msu.edu/about/">About</a> page and adopts the 3d slider presentation mode.
### File listing:
* **PRLtimelinejQuerycompiled.scss**: The file includes all the package's core CSS files in one location. Do not make any modifications to this file. The **prlCustomCSS-2018.scss** file (see CSS folder section) is setup to automatically include the contents of this file so all PRL custom CSS is uploaded to Mura from one location.
* **about-page-history-timeline.html**: This file houses the timeline content. It also includes the core timeline JS scripts. To modify timeline content, make the changes to this file in a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>, then paste the code in the PRL's About page.

**Any CSS changes to the timeline should be made separately in the prlCustomCSS-2018.scss file, in the 'About' section**. Do not make changes to the **PRLtimelinejQuerycompiled.scss** file. The timeline is constantly updated by the developer, and as core files are overwritten, we lose any custom changes within those files on update.
 
## JS Folder
The JS folder contains the custom PRL jQuery code. 
### Instructions to modify code:
* **Custom modifications take place in the prlCustomJS.js file,  outside of Mura**. This is the core PRL custom JS file. It requires knowledge of JS and jQuery programming languages and a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>.
* **Copy and paste the contents from the prlCustomJS.js file into Mura's dedicated custom JS file**. The dedicated file is found in Mura's back File Manager, under *prl_User_Assets/File/websiteTheme/prlCustomJS.js*. Right click **prlCustomJS.js**, choose 'Edit,' and paste the code. Save your changes.
* **In Mura, do not change the name of the prlCustomJS.js file**. Any change will cause the server to not load the custom JS
* **Identical copies of the JS files in this repository are also found on the PRL server.** Ensure that all versions are up to date.
