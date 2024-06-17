<%@ Register TagPrefix="cms" Namespace="Cms.Web.ClientSite" Assembly="Cms.Web.ClientSite" %>
<!doctype html>
<html class="no-js" lang="en">
<head>
<!-- #include file="inc_head.aspx" -->

    <cms:ContentWriter OutputType="title" Runat="server" Name="Test Home" />
	<cms:ContentWriter OutputType="description" Runat="server" Name="Test Home" />
	<cms:ContentWriter OutputType="keywords" Runat="server" Name="Test Home" />

</head>
    <body class="home option-slideshow ob-panel-side ob-mobile-panel-side option-personalization nav-side option-tools" id="top">
        <!-- #include file="inc_header.aspx" --><cms:ContentWriter Runat="server" ID="TestHome" Name="Test Home" /><!-- #include file="inc_footer.aspx" -->
    </body>
</html>