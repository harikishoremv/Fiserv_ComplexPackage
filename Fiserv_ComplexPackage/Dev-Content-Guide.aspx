<%@ Register TagPrefix="cms" Namespace="Cms.Web.ClientSite" Assembly="Cms.Web.ClientSite" %>
<!doctype html>
<html class="no-js" lang="en">
<head>
<!-- #include file="inc_head.aspx" -->

    <title>Dev Content Guide</title>

</head>
    <body class="option-slideshow ob-panel-side ob-mobile-panel-side option-personalization nav-side option-tools" id="top">
        <!-- #include file="inc_header.aspx" -->
<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h1>Design 209 Dev Content Guide</h1>
                <h2>Features</h2>
                <p>Refer to each section for more detailed instructions:</p>
                <ul class="List-Checkmark">
                    <li><a href="#Adaptive-Color-Themes">Adaptive Color Themes</a></li>
                    <li><a href="#Alternate-Static-Header">Static Header Option</a>
						<ul><li>Logo with Color</li></ul>
					</li>
					<li><a href="#Alternate-Image-Fade-Overlay">Image Fade Overlay</a></li>
					<li><a href="#Build-Specific">Build Specific</a></li>
                </ul>
			</td>
		</tr>
	</tbody>
</table>
<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
                <h2><a id="Adaptive-Color-Themes"></a>Adaptive Color Themes</h2>
                <p>Design 209 utilizes the Color Contrast package and custom styles to achieve Adaptive Color Themes. Essentially as colors change, designated areas of the site will automatically adapt accordingly.  The most obvious use of this is the header area. Refer to the <a href="#Alternate-Static-Header">Static Header Option</a> for specific information on how it adapts based off of the color chosen. Experimenting with the base <a href="https://whstage2.secureinternetbank.com/design209/" target="_blank">Design 209</a> site is a good way to see it in action.</p>
				<p>Be aware that this is achieved by a div in the footer with the class '<strong>.theme-color</strong>'. Please do not remove this div.</p>
			</td>
		</tr>
	</tbody>
</table>
<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2><a id="Alternate-Static-Header"></a>Static Header</h2>
                <p>Design 209's header/primary navigation has a seamless fade look by default, as opposed to a hard defined header. The more pronounced header appears on hover and when you scroll down the site. The '<strong>.header-static</strong>' class allows the seamless fade look to be overridden. The more pronounced header will always be visible.</p>
				<p>Refer to <a href="#Static-Pages">Static Pages</a> for a list of .aspx pages to add classes to the body for.</p>
				<h3>Automatic Static Header</h3>
				<p>In certain instances the static header will automatically activate for convenience.  This includes when '<strong>.logo-vertical</strong>' is used&mdash;which adds the standard white box behind the logo&mdash;and when the theme of the site is white or a very light color. The theme of the site is controlled by the CSS variable --color2/--color2-rgba and activated with the Color Contrast package.</p>
				<h3>Logo with Color</h3>
				<p>To achieve the default look for Design 209, the FI's logo needs to be white. There is css that will automatically inverse the logo for you (around line 38 of style.css).  If a FI or you think the logo isn't white enough or needs to be colored, there are steps you can take to remedy the issue.</p>
				<p>The inverse of the logo color will depend on its original color.  For example, the Fiserv logo's orange will inverse to a mostly white logo but it isn't pure white.  This will suffice in most cases but a FI or you may want a different result. For best results the logo should be black to produce the inverse effect to pure white.  Alternately, you could use Illustrator and make the logo white and comment out the css around line 38 of style.css. </p>
				<h4>Logo needs to have color</h4>
				<p>There are two main solutions to have a colored logo with Design 209: 
				<ol>
					<li>Automatic Static Header approach - Choose white or a light color for the theme via --color2/--color2-rgba. This will automatically activate the static header as detailed above.</li>
					<li>.logo-vertical - This will add the white box behind the logo and activate the static header.</li>
				</ol>
							</td>
		</tr>
	</tbody>
</table>
<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2><a id="Alternate-Image-Fade-Overlay"></a>Image Fade Overlay</h2>
                <p>Design 209 uses a full dark overlay no matter if '<strong>.Text-Left</strong>' or '<strong>.Text-Right</strong>' are used within a .Subsection-Table. This is the intended look for this design. For those insisting on an alternative or more standard Fiserv CSS look, the class '<strong>.overlay-fade</strong>' can be added to the body.  Please note that all overlays will be dark with this design.</p>
				<p>Refer to <a href="#Static-Pages">Static Pages</a> for a list of .aspx pages to add classes to the body for.</p>
							</td>
		</tr>
	</tbody>
</table>
<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2><a id="Static-Pages"></a>Static Pages</h2>
				<h3>Add class to the body for the following pages:</h3>
				<ul>
					<li>default.aspx</li>
					<li>customContent.aspx</li>
					<li>error403.aspx</li>
					<li>error404.aspx</li>
					<li>error500.aspx</li>
					<li>speedbump.aspx</li>
					<li>mailbump.aspx</li>
					<li>test-home.aspx</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>
<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2><a id="Build-Specific"></a>Build Specific</h2>
				<h3>General Updates</h3>
				<ul>
					<li>Any css edits for your specific build will be made to <strong>style.css</strong></li>
				</ul>
				<h3>Personalization</h3>
				<p>If <a href="https://whstage1.secureinternetbank.com/Code-Library/Personalization/" style="padding-right: .35em">Personalization</a> isn't used on your build, remove the following from the home cms article:
				<pre><code>&lt;span class="greeting"&gt;Welcome, &lt;span class="firstname"&gt;Guest&lt;/span&gt;&lt;/span&gt;</code></pre>
			</td>
		</tr>
	</tbody>
</table>
<%--<table class="Subsection-Table">
<tbody>
<tr>
<td><h1>For Developers</h1>
                <h2>Phase 1: Site customization, Mockups and Build</h2>     
				<p>The site should be as close to final as possible not including content. If any of the phase 1 elements cannot be completed due to supplied information, please indicate any missing items in the oneNote for the phase 2 developer.</p>
                <h3>Files to Add/Replace</h3>
                <ol>
                    <li>/images/bank-name-logo.svg. Can be png or linked svg. Suggest not using inline svg. Additional information about <a href="https://helpx.adobe.com/illustrator/using/collect-assets-export-for-screens.html#panel">exporting an svg from illustrator</a>. Rename this file to your bank's name.</li>
                </ol>
                <h3>/css/style.css Changes</h3>
                <ol>
                    <li>Colors can be changed in the :root custom variable rule at the top of style.css. Change color variables per the supplied clients scheme. "--color1" and "--color2" are the two most visible accent colors. Be sure to include the rgb conversions in the "--color1-rgba" rules since some elements rely on rgba.
                    </li>
					<li>There is an option to change the white overlays and half sections to a different shade using the custom variable --color-page-background and --color-page-background-rgba. Suggested colors are light tans, light greys or a dark mode (with modifications to remove the color from the -Half sections)</li>
                    <li>Login button is included on subpages by default. If the client requests a login button removed on subpages, uncomment the display style on or around <strong>line 443</strong>. Search for <em>body:not([class*="home"]) #loginopen[class*="Button"]</em></li>
                </ol>
                <h3>default.aspx Changes</h3>
                <ol>
                    <li><strong>Line 5:</strong> Place the '#' for the include for the referrer to work within your site.</li>
                    <li>Turn on any options signed for in the contract so that they will show in the first look screenshots. See <a href="#Option-Body-Class">option body classes</a>. Enhancements, if chosen, should work without body classes. Refer to indivisual packages for specific implementation instructions.</li>
					<li>Set online banking type. Default is side panel on desktop and mobile sizes. See <a href="#Online-Banking">Online banking</a> section for options and instructions.</li>
                </ol>
                <h3><a id="nav-changes"></a>inc_primary-nav.aspx Changes</h3>
                <ol>
                    <li><strong>Line 1:</strong> Logo* - Replace the source link of the logo to the banks local logo file. Make sure to change the alt and span to the bank's name.</li>
                    <li>Header - There are several header options available as part of Panel Navigation 5.x.x. The default header or "header-topnav" are suggested for use on this design. Refer to the library page for applicable body classes. Logo-Center is not styled to work with this design. Remove "#logo-center" li on or around <strong>line 88</strong> in inc_primary-nav.aspx.</li>
                    <li>If a sitemap has been supplied (it may not have been due to the new process), place the main categories in the navigation, for example "Personal Banking". If the supplied categories have issues fitting, this is a good opportunity to show the client/TC any issues and get them resolved before first look approval. If a sitemap has not been supplied, use the default navigation categories.</li>
                    <li>Using the supplied sitemap (if available), flow one panel of content. If sitemap is not available, use default navigation items. Expand this panel for the navigation screenshot.
                    </li>
                </ol>
                <p><strong>Note:</strong> A Vertical logo option is available for both Desktop and Mobile locations.  See <a href="#Logo-Treatment">logo treatment</a> table below.</p>
                
				<h3>inc_header.aspx</h3>
                <ul>
                    <li>The login is styled to be a side panel login by default. No other login types have been tested/styled for this design.</li>
					<li>If login versions and client details are known, place in the appropriate files to customize for the build. Most times this information is not known until later in phase 2 of the build.</li>
					
                </ul>
                <h3>inc_footer.aspx Changes</h3>
                <ol>
                    <li><strong>Line 54:</strong> Change copyright "Bank Name"</li>
                    <li>Remove the unnecessary FDIC or NCUA logo. Refer to your client's existing site for reference.
                            <ul>
                                <li>For a Bank, keep FDIC, remove NCUA</li>
                                <li>For a Credit Union, keep NCUA, remove FDIC</li>
                            </ul>
                        </li>
                </ol>
				<h3>inc_head.aspx Changes</h3>
                <ol>
                    <li>Implement the client's favicons with <a href="http://realfavicongenerator.net/" target="_blank">Real Favicon Generator</a> site. 
                        <ul>
                            <li>If able to export svg to use for the favicon, logo size doesnt matter. If using a png or jpg, minimum size is recommended 260px x 260px.</li>
                            <li>Once your favicon has been uploaded to the generator and settings have been adjusted as necessary, download the favicon package. Unzip and place in the root of your site files.</li>
                            <li>Copy the link codes on the generators results page and place in the inc_head.aspx of your site.</li>
                            <li>For our use: Remove the leading "/" from the href of each of the link lines.</li>
                            <li>For our use: rename the "site.webmanifest" file to "manifest.json" and edit the link href. Our servers are not set up to recognize the .webmanifest file extension and will throw an error in console.</li>
                        </ul>
                    </li>
                    <li>Insert Google Analytics code</li>
                </ol>       			
				<h4>Enhancements</h4>
				<p>Make sure all contracted enhancements and options are installed, active and functional. This includes items not shown in the mockups. For example TCs may need enhancement classes in cms for content flow. The build should be as close to final as possible before content and sitemap is delivered.</p>
                <h4>Create screenshots</h4>
                <p>You can take screenshots using the <a href="https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg">FireShot Chrome extension</a> or Chrome Dev Tools.</p>
                <p>Screenshots needed:</p>
                <ul>
                    <li>Home Page</li>
                    <li>Home Page with nav panel expanded</li>
                    <li>Sample-Style page</li>
                </ul>
                <p><strong>Helpful Notes:</strong> There doesnt seem to be a good plugin to get an entire screen shot without artifacts or wrong placement of items on some designs. Chrome dev tools may be one of the better ones, but still isnt perfect. If your screenshots aren't turning out like they should, use the windows "Snipping Tool" and create multiple shots of the page and use Photoshop to line them up/splice together to make one image.</p>
                <p><a href="https://developers.google.com/web/updates/2017/04/devtools-release-notes#screenshots" target="_blank" class="Button1">Chrome Screenshot Tutorial</a></p>
                <h4>Mockups</h4>
                <p>Take the screenshots saved above and place them in mockups/images folder of your site files and adjust links within mockups/default.aspx as necessary.</p>
                <p>See the Mockups Library page below for additional information about naming and setup. Look for the "Design Samples" headline.</p>
                </td>
			</tr>
		</tbody>
</table>
<table class="Subsection-Table">
            <tbody>
                <tr>
                    <td><h3>Phase 2: Continue Build and Content Flow</h3>
                 <p>This phase should include flowing sitemap and content as well as confirming all items from phase 1 have been completed and functioning as expected. The site should be ready for internal and client review near the end of this phase.</p>
                <h4>inc_primary-nav.aspx Changes</h4>
                <p>Add in the panel navigation from the supplied sitemap. There is an enhancement that will put a class on a panel that falls outside of view. This class changes the panel width to 100%. If you find that your panel is too wide at normal desktop view, it is because the positioning of the panel div is not correct. Use dev tools to toggle off the "edge" class to see where the panel is positioned. Adjust left or right positioning of that panel accordingly. This edge class is intended to adjust panels on responsive/tablet sizes automatically so that navigation panels are always viewable.</p>
                <h4>inc_footer.aspx Changes</h4>
                <ol>
                    <li>Using the supplied sitemap, add footer navigation links.</li>
                </ol>
                <h4>inc_header.aspx</h4>
                <ul>
                    <li>Update the online banking enroll and forgot password links for both Personal and Business if applicable. Add more links if requested. The template is built to accommodate more links here.</li>
                    <li>Look at the Bank's current website, they may use different terminology for the username and password fields. Replace what is in the template with what they have on their live site.</li>
					<li>Refer to the Online Banking library page for setting version and testing procedures.</li>
                </ul>
                <h4>scripts.js</h4>
                <ul>
					<li><strong>Lines 2-102</strong>: Remove customizer script</li>
					</ul>

					<h4>script-generated.js</h4>
					<ul>
                    <li>Update Online Banking details on or around line 19. 
                        <ul>
                            <li>routing number</li>
                            <li>Update the server names in both retail and business</li>
                        </ul></li>
                    <li>Update to the correct online banking version numbers. These may be in the oneNote or you may have to look in their existing site for reference. If versions are not indicated, contact your TC to request code. Refer to the online banking library page to determine versions</li>
                </ul>
                <h4>sendmail52.aspx</h4>
                <p>If your build has an unsecure form, the logo in the sendmail will need updated on or around <strong>line 44</strong>.</p>
                <ul>
                    <li>This logo cannot be an svg, so you may need to save a sendmail specific png or jpg to use.</li>
                    <li>This can be set to the staging site for review, but will need to be updated to the live url at go live.</li>
                    <li>Update the height and width to match the proportions of your logo.</li>
                </ul>
                <h4>Speedbump.aspx and Mailbump.aspx</h4>
                <ul>
                    <li>Update the referrer domains to your banks domain on <strong>line 32</strong> in both files.</li>
                </ul>
                <h4>Outside site links</h4>
                <p>This template uses the new standard <a href="http://www.google.com">icon</a> after links to indicate that it goes to an outside website. If this is asked to be removed, uncomment the style on or around <strong>line 36</strong> in <strong>style.css</strong> or search for "To remove outside link icon" comment text to find the style.</p>
                <h4>humans.txt</h4>
                <ol>
                    <li>Update <strong>line 6</strong> "DEVName" with your name</li>
                    <li>Update <strong>line 7</strong> "TCName" with the Technical Consultant's name</li>
                    <li>Update <strong>line 10</strong> "BANK NAME HERE" with the Bank's name</li>
                </ol>
                <h4>robots.txt</h4>
                    <p>Robots.txt is pre populated with common pages to disallow based on the packages used for this build. Add additional pages or articles as necessary following the existing format.</p></td>
                </tr>
            </tbody>
        </table>

 <table class="Subsection-Table">
            <tbody>
                <tr>
                    <td>
                        <h2>Content Notes</h2>
                        <p>Add all overides at the bottom of the style.css.  This will allow us to see what overrides are consistently being overridden and all original styles remain in template form.</p>
			
							
						<h3>Image Backgrounds</h4>
						<p>Below are the dimensions for the Subsection imagery</p>
                <h5>Size Specifications</h5>
                <table class="Table-Product" style="width: 100%;">
                    <thead>
                        <tr>
                            <th></th>
                            <th style="width: 35%;">Width
                            </th>
                            <th style="width: 35%;">Height
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Full Height Subsections</td>
                            <td>1920px</td>
                            <td>880px preferred. 620px minimum.</td>
                        </tr>
                       <tr>
                           <td>Half Promo Image</td>
                           <td>960px</td>
                           <td>620px</td>
                       </tr>
                        <tr>
                            <td>Subpage Banner Image</td>
                            <td>1920px</td>
                            <td>At least 550px. Taller depending on section content.</td>
                        </tr>
                    </tbody>
                </table>
                <p class="Disclaimer">Note:  Smaller images will work but will get blurry depending on how much smaller it is.</p>
				<h3>Non background image sections</h4>
				<p>There are three background color sections set up for this design. Refer to the <a href="Content-Guide#Subsection-Table-Color-Examples">content guide</a> for examples and use of these sections.</p>                

                <h3><a id="Logo-Treatment"></a>Logo Treatment</h3>
                <p>The site is setup for both regular and extreme vertical logos. The logo that should be used is within div#logo. See the table below for logo class options and instructions.</p>
				<p>This design is not intended to use the center logo. This li should have been removed (inc_primary-nav.aspx on or around line 88) in phase 1 of the build. </p>
                        <table class="Table-Style">
                            <thead>
                                <tr>
                                    <th style="width: 20%;">Logo class</th>
                                    <th>Sizing adjustments in styles.css</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>No logo body class (default)</td>
                                    <td>
                                       
                                        <p>The size of the logo can be adjusted if necessary. The max-height should not need to be changed but if it does, it will also change the height of the navigation bar. If the logo is too tall to fit in the navigation bar, use the ".logo-vertical" option.</p>
                                        <ul>									
                                            <li>Size the --logo-min-width rule on or around <strong>Line 37 of style.css</strong> (Search for "Logo Overrides").</li>
                                            
                                            <li>Adjust the mobile sizing in the media query on or around <strong>Line 45 of style.css</strong></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><em>logo-vertical</em></p>
                                        <p>On body tag of pages:</p>
                                        <ul>
                                            <li>default.aspx</li>
                                            <li>customContent.aspx</li>
                                            <li>error403.aspx</li>
                                            <li>error404.aspx</li>
                                            <li>error500.aspx</li>
											<li>Speedbump/Mailbump.aspx</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <p>Places a white box behind the logo so it can be taller and stand out from the navigation bar.</p>
                                        <ul>
                                            <li>Size the .logo-vertical --logo-min-width for desktop on or around <strong>line 51 in style.css</strong> or search for "Logo vertical overrides". There is a max-height size by default, for extreme vertical logos, this may need adjusted.</li>
                                            <li>Size the max-height of the mobile version on or around <strong>line 57</strong> of style.css. Be mindful that the taller this logo is on mobile, it will overlap content of the first section.</li>
                                        </ul>
                                    </td>
									</tr>
                            </tbody>
                        </table>
						<h3><a id="Online-Banking"></a>Online Banking</h3>
						<p>There are two types of online banking options for this design. These are classes set on the body.</p>
						<ul>
						<li>Desktop: "ob-panel-side" (default) or "ob-panel"</li>
						<li>Mobile: "ob-mobile-panel-side"</li>
						</ul>
						<h3>Footer navigation</h3>
						<p>The footer navigation is styled to have the first column as contact and social information. If this is removed, styling on mobile sizes may need adjusted since that column is pushed for full width to separate itself from the rest of the footer navigation on responsive sizes.</p>
						<h3>Search</h3>
						<p>Search is not currently styled for this base. If search is desired it can be placed either in the header or footer and styling would need to be done at the time of implementation.</p>
						</td>
		</tr>
	</tbody>
</table>
<table class="Subsection-Table">
<tbody>
<tr>
<td><h2><a id="Splash"></a>Splash Site</h2>
                <p>If template requested as a splash site see the library page for implementation instructions.</p>       
				<h2>Weather</h2>
				<p>If the build requires weather, there are two optional placements. </p>
				<ul><li>Toolbar - code is already in the toolbar package.</li>
				<li>Section - See below for implementation instructions.</li>
				</ul>
			
				<h3>Weather in a section implementation instructions</h3>
				<p>Place the following code in the Home article below the quicklinks section</p>
				<pre>&lt;table class="Subsection-Table-Color1"&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;&lt;div class="weather"&gt;&lt;/div&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;

				</pre>
				</td>
</tr>
</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<table>
					<tbody>
						<tr>
							<td>
								<h1>Dev Content Guide</h1>
								<p>For standards and other implementation processes please reference the Library > Standards page.</p>
								<p>You can customize Dev Content Guide with documentation on how to maintain various aspects of this website.</p>
								<p>This document should not be published beyond stage.</p>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2>Link Phone Numbers for click to call</h2>
				<p>While some mobile browsers will automatically detect phone numbers and convert them to links, we recommend always adding hyperlinks to be safe.  By default, your website will visually hide the styling of the link for desktop users and only display the link on a mobile device.</p>
				<h3>Example link formatting</h3>
				<p>To mark a phone number as a link, use <strong>tel:</strong> followed by the number using the format below, within the URL field of the link popup box:</p>
				<h4>The Standard Markup</h4>
				<ul>
					<li>A plus sign "+" and a 1 and then the area code, followed by the number without dashes; <em><strong>tel:+13335555555</strong></em>
					<ul>
						<li><a href="tel:+13335555555">333-555-5555</a></li>
					</ul>							
				</ul>
				<h4>A list of all formatting options that will function</h4>
				<ul>
					<li>Dashes "-" and a 1 with or without a plus sign "+"; <em><strong>tel:1-333-555-5555</strong></em> or <em><strong>tel:+1-333-555-5555</strong></em>
					<ul>
						<li><a href="tel:+1-333-555-5555">333-555-5555</a></li>
					</ul>
					</li>
					<li>No dashes and a 1 with or without a plus sign "+", <em><strong>tel:13335555555</strong></em> or <em><strong>tel:+13335555555</strong></em>
					<ul>
						<li><a href="tel:13335555555">333-555-5555</a></li>
					</ul>
					</li>
					<li>No dashes and only area code, <em><strong>tel:3335555555</strong></em>
					<ul>
						<li><a href="tel:3335555555">333-555-5555</a></li>
					</ul>
					</li>
				</ul>
				<h3>What does the +1 mean in front of the phone number?</h3>
				<p>The plus sign “+”, signifies the international dialing prefix, "1" indicates the country code, in this case USA.</p>
				<p>Having the number with the "+" format allows you to call that number worldwide without having to remember the unique international numerical dialing prefix.</p>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<table>
					<tbody>
						<tr>
							<td>
								<h2>Table-Privacy</h2>								
								<p>It is current standard to convert the client supplied privacy policy pdf to be browser text formatted. When a pdf is supplied, it is agreed upon to include a button with the link to the acutal pdf unless the client requests otherwise. Highlighted items with the Missing class are subject to change per implementation. Please refer to your supplied content for accurate terminology and bank names. The items below are common places where your verbage may be different from the existing format.</p>
								<h3>Current highlighted "Missing" items</h3>
								<ul>
									<li>Updated date</li>
									<li><strong>Facts</strong>: Bank Name</li>
									<li><strong>How?</strong>: members'/customers' (x2, changes for bank/credit union), Bank Name</li>
									<li><strong>Reasons we can share.... 2nd column heading</strong>: Bank Name</li>
									<li><strong>Questions</strong>: Banks phone number and web address. Link url. This table may not be in your supplied content.</li>
									<li><strong>What we do</strong>: Bank Name (x2)</li>
									<li><strong>Definitions</strong>: Bank Name (x2)</li>
									<li><strong>Definitions, Joint Marketing</strong>: members'/customers'</li>
								</ul>
								<h3>Additional items that may be different</h3>
								<ul>
									<li><strong>What?</strong>: 3 bullet points</li>
									<li><strong>Reasons we can share...</strong>: Any of the Yes or No answers could change. "No" can also be "No, we don't share"</li>
									<li><strong>Reasons we can share...</strong>: Bank may add or remove rows in this table. Make sure to compare carefully</li>
									<li><strong>Reasons we can share...</strong>: "non-affiliates" could be hyphenated or not "nonaffiliates"</li>
									<li><strong>How does Bank Name collect my personal information</strong>: 3 bullet points</li>
									<li><strong>Why can't I limit all sharing</strong>: 3 bullet points</li>
									<li><strong>Definitions</strong>: Any bullet points may change.</li>
									<li><strong>Definitions</strong>: "non-affiliates" could be hyphenated or not "nonaffiliates"</li>
								</ul>
								<h4>Always make sure to compare all tables and content to your supplied content</h4>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2>CMS Include</h2>
				<p>CMS Include allows for include type functionality from within CMS. It could be used for quicklinks, promos, or forms that are used across multiple pages but reference a single article/file.</p>
                <h3>Implementation Guide</h3>
				<p>Within a CMS article:</p>
				<ol>
					<li>Click "insert/edit link."</li>
					<li>Paste the desired article name or file URL into the URL box.</li>
					<li>Select the "CMS-Include" class.</li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h3>Dev Implementation Guide</h3>
                <p>A custom CMS Include can be created by changing the following:</p>
                <ol>
                    <li>Change the nodeList to something specific. Example: "nodelist": document.querySelectorAll(".Form-Include");</li>
                    <li>Change the includeURL to the desired file URL. Example: inc_contact-form.aspx</li>
                    <li>Modify the CSS to update the CMS instructions for that specific selector.</li>
                    <li>Add the unique selector to the style-cms.css file.</li>
                </ol>
                <h4>Example Default:</h4>
                <pre>
&#60;a href="Checking" class="CMS-Include"&#62;Checking&#60;/a&#62;</pre>
                <h4>Example Custom:</h4>
                <pre>
&#60;div class="Form-Include"&#62;Form Include&#60;/div&#62;</pre>
                <pre>
const formInclude = new CMSInclude({
    "querySelectorAll": ".Form-Include",
    "includeURL": "inc_contact-form.aspx"
});</pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h3>Dev Content Guide</h3>
				<p>Options for Ajax Form are changed using its utility packages, CMS Include and Ajax Post.</p>      
				<h4>Setup</h4>
				<ol>
					<li>Verify all supporting utilities have been packaged. Change utility options as needed.</li>
					<li>Make sure the "Thank You" article has been created and populated. Refer to the article exported with the package.</li>
					<li>Insert the below code where the form should appear <pre>&lt;a href="contact" class="Form-Include"&gt;Form Include&lt;/a&gt;</pre></li>
					<li>Update the sendmail52.aspx "emailTo" to the correct recipient email.</li>
					<li>Make sure the sendmail52.aspx "successPage" is going to the correct url.</li>
					<li>Update the logo source (must be a jpg or png. svg files will not work) and size within the email HTML code in sendmail52.aspx.</li>
					<li>Test the form.</li>
				</ol>
				<h4>Troubleshoot</h4>
				<ul>
					<li><strong>Form Not Submitting on IOS or macOS</strong>
						<ol><li>Remove the Ajax Post instance from construct.js.</li></ol>
						This will cause the form to post to another page, instead of asynchronously.
					</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<table>
					<tbody>
						<tr>
							<td>
								<h2>Online Banking Testing Checklist</h2>
								<p>Perform each of these steps on all supported browsers.</p>
								<ul>
									<li>Check that the online banking plugins are not duplicated in another js file (script-generated, jQuery-scripts, login.js, etc.).</li>
									<li>The correct files from the online banking domains show up in sources with no errors (404, 500, PBI in not defined, EBC is not defined).</li>
									<ul>
										<li>In the case of an error, check the profile for the correct stage and live domains.</li>
									</ul>
									<li>Check that the invalid error messages appear for each input and select when submitting an incomplete form.</li>
									<li>Using the console, add the class "loading" to the login div to test/style the spinner overlay.</li>
									<li>Using the console, Add the class "error" to each form to test/style the error fallback direct link.</li>
									<li>Using the console, Add the classes "error" and "message" to each form to test/style the error message overlay.</li>
									<li>Check mobile for any styling issues.</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
<tbody>
<tr>
<td>
<h2>Site Notice</h2>
<p>Several site notice types are pre styled as part of the package. As a developer of this build, determine the type of site notice to use or refer to the oneNote if the client as specified a desired type. Implement the reference.txt content in the "Site Notice" article to test all notices in the build. Site notice types avalable:
<ul><li>Table-Notice-Top</li>
<li>Table-Notice-Bottom</li>
<li>Table-Notice-Bottom-Privacy</li>
<li>Table-Notice-Popup</li>
<li>Table-Notice-Bottom-Right-Popup</li>
</ul>
</p>
<p>Site Notice tables must contain a unique id. This is the marker for the notice to display again if a message is chagned in cms after it has been dismissed by the user.</p>
<p>These default notice types can be customized. The styles are conditional based on the "Table-Notice-<type>" class and can be extended using a custom name as part of the class. Example "Table-Notice-Popup-Full". It is recommended to leave all style css in place to easily implement additional notice types when requested by the client within maintenance.</p>
<p>Once site notice types have been determined for the build, include only those "Table-Notice-<type>" classes in the style-cms.css stylesheet. These will alert the client and TC to the types of notices available to them to utilize.</p></td>
</tr>
</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td><h2>Accessibility Mode</h2>
                        <p>Accessibility mode is a mode that will be turned on by the user to apply predefined styles to address visibility or contrast concerns. When user enabled, the body of the page will have the class ".accessibility-enabled" added to it's class list. This enhancement will require the developer to confirm or add additional special high contrast styles for elements that were previously too weak in contrast to meet WCAG 2.0 guidelines.</p>
                        <p>You can enable/disable the mode by adding the class ".accessibility-mode-toggle" to a link. If you want Enable/Disable verbiage that will show up based on the activation of the mode, add a span wrapper around each word with the class ".enable" and ".disable". Refer below:</p>
                        <pre>&#60;a class="accessibility-mode-toggle"&#62;&#60;span class="enable"&#62;Enable&#60;/span&#62; &#60;span class="disable"&#62;Disable&#60;/span&#62; Accessibility&#60;/a&#62;</pre>
                        <h3>Example Toggle Implementations</h3>
                        <ul>
                            <li>Normal Implementation: <a class="accessibility-mode-toggle"><span class="enable">Enable</span> <span class="disable">Disable</span> Accessibility</a></li>
                            <li>Add an eye icon via Font Awesome ".fa-eye-slash". The eye will change based on being enabled/disabled: <a class="fa-eye-slash accessibility-mode-toggle"><span class="enable">Enable</span> <span class="disable">Disable</span> Accessibility</a></li>
                        </ul></td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2>Captcha Dev Content Guide</h2>
				<form method="post" action="" id="sampleForm" class="ajax-form validate-form" name="sampleForm">
                    <!-- outer div not necessary, but is easier for responsive modification -->
					<input type="hidden" name="captcha2" value="" class="captcha" />
					<label>
						<input type="text" class="captchaAnswer" name="captchaAnswer" value="" placeholder=" " required/>
						<span class="label">Type the numbers you see above:</span>
					</label>
                </form>
				<h3>Implementation Guide</h3>
				<p>Place captcha on any unsecure forms and secure forms by request.</p>
                <h3>Customization</h3>
                <ul>
                    <li>Frame color can be customized upon request.</li>
                    <li>Use <a href="captcha/images/captchaTemplate.psd">psd</a> file to recolor and export new sliced frame pieces</li>
                    <li>If customizing color, also need to replace <em><a href="captcha/images/capFrameBtn.png" target="_blank">capFrameBtn.png</a></em> in your captcha images folder (right click and "save as" since it is a transparent image with a white arrow)</li>
                </ul>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				
								<h2><a id="Error-Pages"></a>Error Pages</h2>								
								<p>Following the steps below will allow you to implement the Error Pages within your web site project.</p>
								<ol>
									<li>Customize Error 403 page.
										<ol>
											<li>Open error403.aspx and customize the shell to match your existing shell.</li>
											<li>Add an article to the Content Manager titled 'Error 403'.</li>
											<li>Refer to the exported <a href="articles/Error-403.txt">Error-403.txt</a> file in the articles folder for article content. Copy and paste this text into the Error 403 article.</li>
										</ol></li>
									<li>Customize Error 404 page.
										<ol>
											<li>Open error404.aspx and customize the shell to match your existing shell.</li>
											<li>Add an article to the Content Manager titled 'Error 404'.</li>
											<li>Refer to the exported <a href="articles/Error-404.txt">Error-404.txt</a> file in the articles folder for article content. Copy and paste this text into the Error 404 article.</li>
											</ol></li>
									<li>Customize Error 500 page.
										<ol>
											<li>Open error500.aspx and customize the shell to match your existing shell.</li>
											<li>Add an article to the Content Manager titled 'Error 500'.</li>
											<li>Refer to the exported <a href="articles/Error-500.txt">Error-500.txt</a> file in the articles folder for article content. Copy and paste this text into the Error 500 article.</li>
										</ol></li>
								</ol>
							
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2>Speedbump</h2>								
				<ol>
					<li>Open <a href="Speedbump.aspx" target="_blank">Speedbump.aspx</a> and customize the shell to match your existing shell. Make sure to apply any site wide body classes.</li>
					<li>Update the URLs (mybank.com and www.mybank.com) to your primary domain. (Add additional 'Then' statements if more domains are in use.)</li>
					<li>Create 'Speedbump Disclaimer' article in the CMS.</li>
                    <li>Add content from the exported article text file.</li>								
				</ol>
				<h2>Mailbump</h2>								
				<ol>
					<li>Open <a href="Mailbump.aspx" target="_blank">Mailbump.aspx</a> and customize the shell to match your existing shell. Make sure to apply any site wide body classes.</li>
					<li>Update the URLs (mybank.com and www.mybank.com) to your primary domain. (Add additional 'Then' statements if more domains are in use.)</li>
					<li>Create 'Mailbump Disclaimer' article in the CMS.</li>
                    <li>Add content from the exported article text file.</li>								
				</ol>
			</td>
		</tr>
	</tbody>
</table>--%>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<table>
					<tbody>
						<tr>
							<td>
								<h1>Dev Content Guide</h1>
								<p>For standards and other implementation processes please reference the Library > Standards page.</p>
								<p>You can customize Dev Content Guide with documentation on how to maintain various aspects of this website.</p>
								<p>This document should not be published beyond stage.</p>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2>Link Phone Numbers for click to call</h2>
				<p>While some mobile browsers will automatically detect phone numbers and convert them to links, we recommend always adding hyperlinks to be safe.  By default, your website will visually hide the styling of the link for desktop users and only display the link on a mobile device.</p>
				<h3>Example link formatting</h3>
				<p>To mark a phone number as a link, use <strong>tel:</strong> followed by the number using the format below, within the URL field of the link popup box:</p>
				<h4>The Standard Markup</h4>
				<ul>
					<li>A plus sign "+" and a 1 and then the area code, followed by the number without dashes; <em><strong>tel:+13335555555</strong></em>
					<ul>
						<li><a href="tel:+13335555555">333-555-5555</a></li>
					</ul>							
				</ul>
				<h4>A list of all formatting options that will function</h4>
				<ul>
					<li>Dashes "-" and a 1 with or without a plus sign "+"; <em><strong>tel:1-333-555-5555</strong></em> or <em><strong>tel:+1-333-555-5555</strong></em>
					<ul>
						<li><a href="tel:+1-333-555-5555">333-555-5555</a></li>
					</ul>
					</li>
					<li>No dashes and a 1 with or without a plus sign "+", <em><strong>tel:13335555555</strong></em> or <em><strong>tel:+13335555555</strong></em>
					<ul>
						<li><a href="tel:13335555555">333-555-5555</a></li>
					</ul>
					</li>
					<li>No dashes and only area code, <em><strong>tel:3335555555</strong></em>
					<ul>
						<li><a href="tel:3335555555">333-555-5555</a></li>
					</ul>
					</li>
				</ul>
				<h3>What does the +1 mean in front of the phone number?</h3>
				<p>The plus sign “+”, signifies the international dialing prefix, "1" indicates the country code, in this case USA.</p>
				<p>Having the number with the "+" format allows you to call that number worldwide without having to remember the unique international numerical dialing prefix.</p>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<table>
					<tbody>
						<tr>
							<td>
								<h2>Table-Privacy</h2>								
								<p>It is current standard to convert the client supplied privacy policy pdf to be browser text formatted. When a pdf is supplied, it is agreed upon to include a button with the link to the acutal pdf unless the client requests otherwise. Highlighted items with the Missing class are subject to change per implementation. Please refer to your supplied content for accurate terminology and bank names. The items below are common places where your verbage may be different from the existing format.</p>
								<h3>Current highlighted "Missing" items</h3>
								<ul>
									<li>Updated date</li>
									<li><strong>Facts</strong>: Bank Name</li>
									<li><strong>How?</strong>: members'/customers' (x2, changes for bank/credit union), Bank Name</li>
									<li><strong>Reasons we can share.... 2nd column heading</strong>: Bank Name</li>
									<li><strong>Questions</strong>: Banks phone number and web address. Link url. This table may not be in your supplied content.</li>
									<li><strong>What we do</strong>: Bank Name (x2)</li>
									<li><strong>Definitions</strong>: Bank Name (x2)</li>
									<li><strong>Definitions, Joint Marketing</strong>: members'/customers'</li>
								</ul>
								<h3>Additional items that may be different</h3>
								<ul>
									<li><strong>What?</strong>: 3 bullet points</li>
									<li><strong>Reasons we can share...</strong>: Any of the Yes or No answers could change. "No" can also be "No, we don't share"</li>
									<li><strong>Reasons we can share...</strong>: Bank may add or remove rows in this table. Make sure to compare carefully</li>
									<li><strong>Reasons we can share...</strong>: "non-affiliates" could be hyphenated or not "nonaffiliates"</li>
									<li><strong>How does Bank Name collect my personal information</strong>: 3 bullet points</li>
									<li><strong>Why can't I limit all sharing</strong>: 3 bullet points</li>
									<li><strong>Definitions</strong>: Any bullet points may change.</li>
									<li><strong>Definitions</strong>: "non-affiliates" could be hyphenated or not "nonaffiliates"</li>
								</ul>
								<h4>Always make sure to compare all tables and content to your supplied content</h4>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
<tbody>
<tr>
<td>
<h1>Timeline</h1>
<table class="Table-Grow-Panel-Timeline">
<tbody>
<tr><td>1900</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at tortor ornare, finibus dui in, congue leo.</td></tr>
<tr><td>1910</td><td>Suspendisse posuere augue nisl, et luctus augue rutrum non. Nunc gravida dolor ac turpis feugiat, a mollis nisl commodo.</td></tr>
<tr><td>1921</td><td>In at varius odio. Quisque pulvinar, est sed vehicula gravida, quam ex placerat arcu, pellentesque feugiat dolor nisi id eros.</td></tr>
<tr><td>1972</td><td>Integer lorem eros, iaculis in semper eget, tempor sit amet libero. Aliquam sit amet hendrerit risus.</td></tr>
<tr><td>1979</td><td>Ut laoreet faucibus eros, sed volutpat lacus pulvinar eu. In non consequat massa. Cras ac velit faucibus, condimentum augue nec, luctus lectus.</td></tr>
<tr><td>1983</td><td>Donec pellentesque, tortor quis faucibus mattis, leo ipsum mattis leo, sed vestibulum magna mi nec velit. Donec et magna eros.</td></tr>
<tr><td><img src="images/timeline-sample-1.jpg">1998</td><td>Suspendisse auctor elit semper luctus porta. Pellentesque vestibulum, neque semper facilisis rutrum, massa metus aliquam neque, sed bibendum sem mi quis felis.</td></tr>
<tr><td>2000</td><td><p><img src="images/timeline-sample-2.jpg"></p><p>Sed semper iaculis orci, a iaculis augue lacinia nec. Donec lorem ipsum, faucibus non varius a, eleifend sed purus.</p></td></tr>
<tr><td>2013</td><td>Quisque finibus, velit ut fringilla luctus, risus libero interdum ex, vulputate lacinia metus nibh nec ipsum.</td></tr>
</tbody></table></td>
</tr>
</tbody>
</table>

<table class="Subsection-Table-Guide">
	<tbody>
		<tr>
			<td>
				<table>
					<tbody>
						<tr>
							<td>
								<h2>Table Timeline</h2>								
								<p>Timelines can outline the events of a bank or credit union that shape them through time.  The Table Timeline provides a fluid structure to visually represent these events while maintaining the highest degree of design integrity on a variety of device widths.</p>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2>CMS Include</h2>
				<p>CMS Include allows for include type functionality from within CMS. It could be used for quicklinks, promos, or forms that are used across multiple pages but reference a single article/file.</p>
                <h3>Implementation Guide</h3>
				<p>Within a CMS article:</p>
				<ol>
					<li>Click "insert/edit link."</li>
					<li>Paste the desired article name or file URL into the URL box.</li>
					<li>Select the "CMS-Include" class.</li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h3>Dev Implementation Guide</h3>
                <p>A custom CMS Include can be created by changing the following:</p>
                <ol>
                    <li>Change the nodeList to something specific. Example: "nodelist": document.querySelectorAll(".Form-Include");</li>
                    <li>Change the includeURL to the desired file URL. Example: inc_contact-form.aspx</li>
                    <li>Modify the CSS to update the CMS instructions for that specific selector.</li>
                    <li>Add the unique selector to the style-cms.css file.</li>
                </ol>
                <h4>Example Default:</h4>
                <pre>
&#60;a href="Checking" class="CMS-Include"&#62;Checking&#60;/a&#62;</pre>
                <h4>Example Custom:</h4>
                <pre>
&#60;div class="Form-Include"&#62;Form Include&#60;/div&#62;</pre>
                <pre>
const formInclude = new CMSInclude({
    "querySelectorAll": ".Form-Include",
    "includeURL": "inc_contact-form.aspx"
});</pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h3>Dev Content Guide</h3>
				<p>Options for Ajax Form are changed using its utility packages, CMS Include and Ajax Post.</p>      
				<h4>Setup</h4>
				<ol>
					<li>Verify all supporting utilities have been packaged. Change utility options as needed.</li>
					<li>Make sure the "Thank You" article has been created and populated. Refer to the article exported with the package.</li>
					<li>Insert the below code where the form should appear <pre>&lt;a href="contact" class="Form-Include"&gt;Form Include&lt;/a&gt;</pre></li>
					<li>Update the sendmail52.aspx "emailTo" to the correct recipient email.</li>
					<li>Make sure the sendmail52.aspx "successPage" is going to the correct url.</li>
					<li>Update the logo source (must be a jpg or png. svg files will not work) and size within the email HTML code in sendmail52.aspx.</li>
					<li>Test the form.</li>
				</ol>
				<h4>Troubleshoot</h4>
				<ul>
					<li><strong>Form Not Submitting on IOS or macOS</strong>
						<ol><li>Remove the Ajax Post instance from construct.js.</li></ol>
						This will cause the form to post to another page, instead of asynchronously.
					</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<table>
					<tbody>
						<tr>
							<td>
								<h2>Online Banking Testing Checklist</h2>
								<p>Perform each of these steps on all supported browsers.</p>
								<ul>
									<li>Check that the online banking plugins are not duplicated in another js file (script-generated, jQuery-scripts, login.js, etc.).</li>
									<li>The correct files from the online banking domains show up in sources with no errors (404, 500, PBI in not defined, EBC is not defined).</li>
									<ul>
										<li>In the case of an error, check the profile for the correct stage and live domains.</li>
									</ul>
									<li>Check that the invalid error messages appear for each input and select when submitting an incomplete form.</li>
									<li>Using the console, add the class "loading" to the login div to test/style the spinner overlay.</li>
									<li>Using the console, Add the class "error" to each form to test/style the error fallback direct link.</li>
									<li>Using the console, Add the classes "error" and "message" to each form to test/style the error message overlay.</li>
									<li>Check mobile for any styling issues.</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
<tbody>
<tr>
<td>
<h2>Site Notice</h2>
<p>Several site notice types are pre styled as part of the package. As a developer of this build, determine the type of site notice to use or refer to the oneNote if the client as specified a desired type. Implement the reference.txt content in the "Site Notice" article to test all notices in the build. Site notice types avalable:
<ul><li>Table-Notice-Top</li>
<li>Table-Notice-Bottom</li>
<li>Table-Notice-Bottom-Privacy</li>
<li>Table-Notice-Popup</li>
<li>Table-Notice-Bottom-Right-Popup</li>
</ul>
</p>
<p>Site Notice tables must contain a unique id. This is the marker for the notice to display again if a message is chagned in cms after it has been dismissed by the user.</p>
<p>These default notice types can be customized. The styles are conditional based on the "Table-Notice-<type>" class and can be extended using a custom name as part of the class. Example "Table-Notice-Popup-Full". It is recommended to leave all style css in place to easily implement additional notice types when requested by the client within maintenance.</p>
<p>Once site notice types have been determined for the build, include only those "Table-Notice-<type>" classes in the style-cms.css stylesheet. These will alert the client and TC to the types of notices available to them to utilize.</p></td>
</tr>
</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td><h2>Accessibility Mode</h2>
                        <p>Accessibility mode is a mode that will be turned on by the user to apply predefined styles to address visibility or contrast concerns. When user enabled, the body of the page will have the class ".accessibility-enabled" added to it's class list. This enhancement will require the developer to confirm or add additional special high contrast styles for elements that were previously too weak in contrast to meet WCAG 2.0 guidelines.</p>
                        <p>You can enable/disable the mode by adding the class ".accessibility-mode-toggle" to a link. If you want Enable/Disable verbiage that will show up based on the activation of the mode, add a span wrapper around each word with the class ".enable" and ".disable". Refer below:</p>
                        <pre>&#60;a class="accessibility-mode-toggle"&#62;&#60;span class="enable"&#62;Enable&#60;/span&#62; &#60;span class="disable"&#62;Disable&#60;/span&#62; Accessibility&#60;/a&#62;</pre>
                        <h3>Example Toggle Implementations</h3>
                        <ul>
                            <li>Normal Implementation: <a class="accessibility-mode-toggle"><span class="enable">Enable</span> <span class="disable">Disable</span> Accessibility</a></li>
                            <li>Add an eye icon via Font Awesome ".fa-eye-slash". The eye will change based on being enabled/disabled: <a class="fa-eye-slash accessibility-mode-toggle"><span class="enable">Enable</span> <span class="disable">Disable</span> Accessibility</a></li>
                        </ul></td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2>Captcha Dev Content Guide</h2>
				<form method="post" action="" id="sampleForm" class="ajax-form validate-form" name="sampleForm">
                    <!-- outer div not necessary, but is easier for responsive modification -->
					<input type="hidden" name="captcha2" value="" class="captcha" />
					<label>
						<input type="text" class="captchaAnswer" name="captchaAnswer" value="" placeholder=" " required/>
						<span class="label">Type the numbers you see above:</span>
					</label>
                </form>
				<h3>Implementation Guide</h3>
				<p>Place captcha on any unsecure forms and secure forms by request.</p>
                <h3>Customization</h3>
                <ul>
                    <li>Frame color can be customized upon request.</li>
                    <li>Use <a href="captcha/images/captchaTemplate.psd">psd</a> file to recolor and export new sliced frame pieces</li>
                    <li>If customizing color, also need to replace <em><a href="captcha/images/capFrameBtn.png" target="_blank">capFrameBtn.png</a></em> in your captcha images folder (right click and "save as" since it is a transparent image with a white arrow)</li>
                </ul>
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				
								<h2><a id="Error-Pages"></a>Error Pages</h2>								
								<p>Following the steps below will allow you to implement the Error Pages within your web site project.</p>
								<ol>
									<li>Customize Error 403 page.
										<ol>
											<li>Open error403.aspx and customize the shell to match your existing shell.</li>
											<li>Add an article to the Content Manager titled 'Error 403'.</li>
											<li>Refer to the exported <a href="articles/Error-403.txt">Error-403.txt</a> file in the articles folder for article content. Copy and paste this text into the Error 403 article.</li>
										</ol></li>
									<li>Customize Error 404 page.
										<ol>
											<li>Open error404.aspx and customize the shell to match your existing shell.</li>
											<li>Add an article to the Content Manager titled 'Error 404'.</li>
											<li>Refer to the exported <a href="articles/Error-404.txt">Error-404.txt</a> file in the articles folder for article content. Copy and paste this text into the Error 404 article.</li>
											</ol></li>
									<li>Customize Error 500 page.
										<ol>
											<li>Open error500.aspx and customize the shell to match your existing shell.</li>
											<li>Add an article to the Content Manager titled 'Error 500'.</li>
											<li>Refer to the exported <a href="articles/Error-500.txt">Error-500.txt</a> file in the articles folder for article content. Copy and paste this text into the Error 500 article.</li>
										</ol></li>
								</ol>
							
			</td>
		</tr>
	</tbody>
</table>

<table class="Subsection-Table">
	<tbody>
		<tr>
			<td>
				<h2>Speedbump</h2>								
				<ol>
					<li>Open <a href="Speedbump.aspx" target="_blank">Speedbump.aspx</a> and customize the shell to match your existing shell. Make sure to apply any site wide body classes.</li>
					<li>Update the URLs (mybank.com and www.mybank.com) to your primary domain. (Add additional 'Then' statements if more domains are in use.)</li>
					<li>Create 'Speedbump Disclaimer' article in the CMS.</li>
                    <li>Add content from the exported article text file.</li>								
				</ol>
				<h2>Mailbump</h2>								
				<ol>
					<li>Open <a href="Mailbump.aspx" target="_blank">Mailbump.aspx</a> and customize the shell to match your existing shell. Make sure to apply any site wide body classes.</li>
					<li>Update the URLs (mybank.com and www.mybank.com) to your primary domain. (Add additional 'Then' statements if more domains are in use.)</li>
					<li>Create 'Mailbump Disclaimer' article in the CMS.</li>
                    <li>Add content from the exported article text file.</li>								
				</ol>
			</td>
		</tr>
	</tbody>
</table>
		<!-- #include file="inc_footer.aspx" -->
    </body>
</html>

