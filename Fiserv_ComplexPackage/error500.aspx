<%@ Register TagPrefix="cms" Namespace="Cms.Web.ClientSite" Assembly="Cms.Web.ClientSite" %>
<!doctype html>
<%
    Server.ClearError()
    Response.Status = "500 Internal server error."
    Response.StatusCode = 500
    Response.TrySkipIisCustomErrors = True
%>
<html class="no-js" lang="en">
<head>
<!-- #include file="inc_head.aspx" -->

    <cms:ContentWriter OutputType="title" Runat="server" Name="Error 500" />
	<cms:ContentWriter OutputType="description" Runat="server" Name="Error 500" />
	<cms:ContentWriter OutputType="keywords" Runat="server" Name="Error 500" />

</head>
    <body class="option-slideshow ob-panel-side ob-mobile-panel-side option-personalization nav-side option-tools" id="top">
        <!-- #include file="inc_header.aspx" -->
		<table class="Subsection-Table">
			<tbody>
    			<tr>
					<td>
						<cms:ContentWriter Runat="server" ID="Error500" Name="Error 500" />	
					</td>
				</tr>	
			</tbody>
		</table>
		<!-- #include file="inc_footer.aspx" -->
    </body>
</html>