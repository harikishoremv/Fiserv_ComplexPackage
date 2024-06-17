<%@ Register TagPrefix="cms" Namespace="Cms.Web.ClientSite" Assembly="Cms.Web.ClientSite" %>
<!doctype html>
<html class="no-js theme-1" lang="en">
<head>
<!-- #include file="inc_head.aspx" -->

    <cms:ContentWriter OutputType="title" Runat="server" /> 
	<cms:ContentWriter OutputType="description" Runat="server" /> 
	<cms:ContentWriter OutputType="keywords" Runat="server" />

</head>
    <body class="option-slideshow ob-panel-side ob-mobile-panel-side option-personalization nav-side option-tools" id="top">
        <!-- #include file="inc_header.aspx" --><cms:ContentWriter Runat="server"/><!-- #include file="inc_footer.aspx" -->
    </body>
</html>