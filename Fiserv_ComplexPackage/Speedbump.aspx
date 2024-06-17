<%@ Register TagPrefix="cms" Namespace="Cms.Web.ClientSite" Assembly="Cms.Web.ClientSite" %>
<!doctype html>
<html class="no-js" lang="en">
<head>
<!-- #include file="inc_head.aspx" -->

    <cms:ContentWriter OutputType="title" Runat="server" Name="Speedbump Disclaimer" />
	<cms:ContentWriter OutputType="description" Runat="server" Name="Speedbump Disclaimer" />
	<cms:ContentWriter OutputType="keywords" Runat="server" Name="Speedbump Disclaimer" />

</head>
	<body class="option-slideshow ob-panel-side ob-mobile-panel-side option-personalization nav-side option-tools" id="top">
		<!-- #include file="inc_header.aspx" --><!-- template area main -->
		<table class="Subsection-Table">
			<tbody>
				<tr>
					<td>
						<cms:ContentWriter Runat="server" ID="SpeedbumpDisclaimer" Name="Speedbump Disclaimer" />
						<!-- begin speed bump code -->
						<p>
							<% 
								Dim referrer, domain, intCount, referrerDomain, link
								Dim url As String = HttpContext.Current.Request.Url.AbsoluteUri
								link = url.Replace(url.Split("?")(0), "")
								link = link.Replace("?link=", "")
								referrer = Request.ServerVariables("HTTP_REFERER")
								domain = Split(referrer, "/", 4)
								'Set referrerDomain to domain only 
								For intCount = 2 To UBound(domain) - 1
									referrerDomain = domain(intCount)
								Next
								'Set allowable domains
								Dim _fiservDomainRegEx As String = "\.(secureinternetbank|fiserv-ecomhosting|c3vault1).com$"
								Dim r As New Regex(_fiservDomainRegEx)
								If r.IsMatch(referrerDomain) Or referrerDomain = "mybank.com" Or referrerDomain = "www.mybank.com" Then
							%>
								<a id="speedbump-accept" href="<%=link%>">Accept</a>
							<%
								Else
									Response.Redirect("default.aspx")
								End If
							%>
							<a href="javascript:" onclick="window.close();" class="Button1 cancel-new-window">Cancel</a>
							<a href="javascript:" onclick="window.history.go(-1); return false;" class="Button1 cancel-back">Cancel</a>
						</p>
					</td>
				</tr>	
			</tbody>
		</table>
		<!-- #include file="inc_footer.aspx" -->
	</body>
</html>