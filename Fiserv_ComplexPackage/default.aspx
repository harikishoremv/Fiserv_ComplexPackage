<%@ Register TagPrefix="cms" Namespace="Cms.Web.ClientSite" Assembly="Cms.Web.ClientSite" %>
<!-- #include file="mockups/inc_overview-referrer.aspx" -->
<!doctype html>
<html class="no-js" lang="en">
<head>
<!-- #include file="inc_head.aspx" -->

    <cms:ContentWriter OutputType="title" Runat="server" Name="Home" />
	<cms:ContentWriter OutputType="description" Runat="server" Name="Home" />
	<cms:ContentWriter OutputType="keywords" Runat="server" Name="Home" />

</head>
    <body class="home option-slideshow ob-panel-side ob-mobile-panel-side option-personalization nav-side option-tools" id="top">
        <!-- #include file="inc_header.aspx" -->
<cms:ContentWriter Runat="server" ID="Home" Name="Home" />
		<!-- #include file="inc_footer.aspx" -->
    </body>
</html>

