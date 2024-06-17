<div id="logo"><a href="./"><img src="https://whstage1.secureinternetbank.com/Code-Library/images/bank-name-logo.svg" alt="Bank Name Logo"></a></div>
<nav class="secondary">
    <cms:ContentWriter Runat="server" ID="TopNavigation" Name="Top Navigation" />
</nav>
<div class="controls">
	<a href="./#Login-Panel" id="loginopen" class="Button1 fa-lock login-open"><span>Login</span></a>
	<a href="javascript:void(0)" id="menuopen" tabindex="-1" class="hamburger">
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="visuallyhidden">Menu</span>
	</a>
</div>
<div id="overlay-nav" class="nav-close"></div>
<nav id="primary" aria-expanded="false">
    <div id="hover-release" tabindex="0"></div>
	<div>
		<div class="nav-logo"><a href="./"><img src="https://whstage1.secureinternetbank.com/Code-Library/images/bank-name-logo.svg" alt="Bank Name Logo Navigation"></a></div>
        <button class="nav-close"><span class="icon"></span><span class="visuallyhidden">Nav Close</span></button>
		<ul>
			<cms:ContentWriter Runat="server" ID="PanelNavigation" Name="Panel Navigation" />
			<li id="logo-center"><a href="./"><img src="https://whstage1.secureinternetbank.com/Code-Library/images/bank-name-logo.svg" alt="Bank Name Logo"></a></li>
            <%--<li id="nav-login"><a href="./#Login-Panel" id="nav-loginopen" tabindex="-1" class="Button1 fa-lock login-open">Login <strong><em>for Online Banking</em></strong></a></li>--%>
		</ul>
	</div>			
</nav>