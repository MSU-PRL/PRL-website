# PRL Website - Custom Code
<p><em>This repository applies to the <a href="https://prl.natsci.msu.edu/">PRL website</a>, as hosted by the MSU College of Natural Sciences on Mura CMS. Although the PRL website has a pre-built design that is visually consistent with all websites within the College, it can contain custom content and styles between the header and footer areas. This repository has instructions for using the PRL custom code files. Each section below refers to its respective folder in the repository.</em></p>
<hr>

## CSS Folder


The CSS folder contains all custom stylesheets for the PRL website. Instructions for managing the code:

 * <strong>Custom modifications take place in the prlCustomCSS-2018.scss file, outside of Mura</strong>. This file contains variables that allow for control and consistency of custom visual components. It requires knowledge of SCSS programming language and a viable code editor, such as <a href="https://code.visualstudio.com/"> Visual Studio Code</a>.

* <strong>Use an automated compile and minimize system</strong>, as Mura only reads .css files. Instructions:
    <ol>
      <li> **prlCustomCSS-2018.scss** file</code> should be automatically compiled into the <code>prlCustomCSS-2018.css</code> file on each iteration. <a href="http://koala-app.com/">Koala</a> is a good compiler.</li>
      <li>The <code>prlCustomCSS-2018.css</code> file should be automatically minimized into the <code>prlCustomCSS-2018.min.css</code> file. This can be done in code editors such as Visual Studio Code.</li>
      <li> Copy and paste the minimized code from the <code>prlCustomCSS-2018.min.css</code> file into Mura's dedicated custom CSS file. The dedicated file is found in Mura's File Manager, under <em>prl_User_Assets/File/websiteTheme/prlCustomCSS.css</em>. Right click prlCustomCSS.css, choose 'Edit' and paste the code. Save your changes.</li>
    </ol>
  <li><strong>In Mura, do not change the name of the 'prlCustomCSS.css' file.</strong> Any change will cause the server to not load the custom CSS.</li>
  <li><strong>Identical copies of the CSS files in this repository are also found on the PRL server.</strong> Ensure that all versions are up to date.
</ul>
<hr>
<h2>HTML Folder</h2>
<p> The HTML folder contains content used on the PRL website. <strong>Identical copies of these files are also found on the PRL server. Ensure that all versions at all locations are up to date.</strong></p>
<p>File listing:</p>
<ul>
  <li><strong>homepage-brands-2018.html:</strong> This content is used on the <a href="https://prl.natsci.msu.edu/">PRL homepage</a> in the section following the hero image. </li>
    <ul>
      <li>Any changes should be made in this file and not in Mura.</li>
      <li>To update the content in Mura, paste the code from this file in the 'Homepage Three Brands Section' component, which can be located in the Mura back end.</li>
  </ul>
  <li><strong>PRL-card-markup.html:</strong> This is the markup for all the PRL card styles. It is also found on the PRL <a href="https://prl.natsci.msu.edu/about/internal-resources/brand-style-guide/">Brand Style Guide page</a>.
  </li>
</ul>
<hr>
<h2>History Timeline Folder</h2>
<p> The PRL History Timeline is located in the <a href="https://prl.natsci.msu.edu/about/">About</a> page. The timeline is a CSS and jQUery plugin called <a href="http://preview.codecanyon.net/item/zoomtimeline-css-timeline-pack/full_screen_preview/16918891?_ga=2.76863253.1076320330.1529523907-713049933.1525180595">ZoomTimeline</a> (<a href="http://digitalzoomstudio.net/">developer's site</a>) and allows for different presentation modes. </p>
<p>File listing:</p>
<ul>
  <li><strong>PRLtimelinejQuerycompiled.scss</strong>: The file includes all the package's core CSS files in one location. This file is automatically imported to the "prlCustomCSS-2018.scss" file for inclusion on the PRL website. Do not make any modifications to this code.</li>
  <li><strong>about-page-history-timeline.html</strong>: This file is where the timeline content is modified. It also includes the JS scripts. To modify the timeline content, make the changes in this file, then paste the code in the PRL's About page.</li>
  </ul>
 <p> <strong>Any CSS changes to the timeline should be made separately in the 'prlCustomCSS-2018.scss' file in its relevant 'About' section</strong>. Do not make changes to the "PRLtimelinejQuerycompiled.scss" file. The timeline is constantly updated by the developer, and core files will have to be overwritten. We would lose any custom changes on update if those are included in the core files.</p>
 <hr>
<h2>JS Folder</h2>
<p>The JS folder contains the custom PRL jQuery code. Instructions for managing the code:</p>
<ul>
  <li><strong>Modifications outside of Mura take place in the 'prlCustomJS.js' file</strong>.</li>
  <li><strong>Copy and paste the contents from the 'prlCustomJS.js' file into Mura's dedicated custom JS file</strong>. The dedicated file is found in Mura's back end. Go to the File Manager, then look for prl_User_Assets/File/websiteTheme/prlCustomJS.js. Right click and choose 'Edit' under the 'prlCustomJS.js' file and paste the code. Save your changes.</li>
  <li>In Mura, do not change the name of the 'prlCustomJS.js' file. Any change will cause the server to not load the custom JS.</li>
  <li><strong>In Mura, do not change the name of the 'prlCustomJS.js' file</strong>. Any change will cause the server to not load the custom CSS.
  <li><strong>All the files in the folder are also found in the PRL server</strong>. Ensure that all versions at all locations are up to date.
  </ul>
