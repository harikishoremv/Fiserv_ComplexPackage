<%@ Register TagPrefix="nf" Assembly="FiservSolution.UserServices" Namespace="FiservSolution.UserServices" %>
<div class="weather-container">
	<form name="weatherwidget" class="weatherwidget" method="post" runat="server">
		<nf:WeatherStyleControl DefaultZIP="02048" runat="server" />
	</form>
	<a href="javascript:" class="Change-Location-Link Button1">Change Location</a> 
</div>
   