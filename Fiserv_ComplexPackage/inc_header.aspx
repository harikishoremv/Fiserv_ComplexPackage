<header role="banner"><div id="login" class="personal loading">
				<button class="login-close"><span class="icon"></span><span class="visuallyhidden">Close</span></button>
                <h2><a id="Online-Banking"></a>Online Banking</h2>
<%--                    <fieldset>
                    <legend>Select Account Type</legend>
                    <label>
                        <input type="radio" name="loginTo" id="loginTo-Personal" value="personal" required/>
                        <span>Personal</span>
                    </label>
                    <label>
                        <input type="radio" name="loginTo" id="loginTo-Business" value="business" required/>
                        <span>Business</span>
                    </label>
                    <!--label>
                        <input type="radio" name="loginTo" id="loginTo-Other" value="other" required/>
                        <span>Other</span>
                    </label-->
					<span class="error">Please Select an Account Type</span>
                </fieldset>--%>
                <label>
                    <span>Select an Account</span>
                    <select name="loginTo" required>
                        <option value="" disabled selected>Select Account</option>
                        <option value="personal">Personal Banking</option>
                        <option value="business">Business Banking</option>
                        <!--option value="other">Other</option-->
                    </select>
                    <span class="fa-angle-down"></span>
					<span class="error">Please Select an Account Type</span>
                </label>
                <%-- Retail Online 5.1+ --%>
                <%--<form class="personal validate-form" method="POST" name="ro-form" id="ro-form" autocomplete="off">
                    <label>
                        <span>Enter Username</span>
                        <input type="text" name="username" placeholder="Enter Username" autocapitalize="none" autocomplete="off" required>
						<span class="error">Please Enter Your Username</span>
                    </label>
                    <label>
                        <span>Enter Password</span>
                        <input type="password" name="password" placeholder="Enter Password" autocapitalize="none" autocomplete="off" required>
						<span class="error">Please Enter Your Password</span>
                    </label>
                    <button type="submit" class="Button1 submit"><span>Log in</span></button>
                </form>--%>
				<%-- Retail Online 5.4 --%>
                <form class="personal validate-form" method="POST" name="pbi-form" id="pbi-form" autocomplete="off">
                    <label>
                        <span>Enter Username</span>
                        <input type="text" name="username" id="pbi-username" placeholder="Enter Username" autocapitalize="none" autocomplete="off" required>
						<span class="error">Please Enter Your Username</span>
                    </label>
                    <label>
                        <span>Enter Password</span>
                        <input type="password" name="password" id="pbi-password" placeholder="Enter Password" autocapitalize="none" autocomplete="off" required>
						<span class="error">Please Enter Your Password</span>
                    </label>
                    <button type="submit" class="Button1 submit"><span>Log in</span></button>
					<div class="error">
						<a href="https://idemo.secureinternetbank.com/PBI_PBI1151/Login/199999996" class="Button1 submit"><span>Log in</span></a>
						<p class="message">Error, press "Log in" to continue.</p>
					</div>
                </form>
				<%-- Abiliti XD --%>
                <%-- <form class="personal validate-form" method="POST" name="abi-form" id="abi-form" autocomplete="off">
                    <label>
                        <span>Enter Username</span>
                        <input type="text" name="LoginName" id="abi-username" placeholder="Enter Username" autocapitalize="none" autocomplete="off" required>
						<span class="error">Please Enter Your Username</span>
                    </label>
                    <label>
                        <span>Enter Password</span>
                        <input type="password" name="Password" id="abi-password" placeholder="Enter Password" autocapitalize="none" autocomplete="off" required>
						<span class="error">Please Enter Your Password</span>
                    </label>
                    <button type="submit" class="Button1 submit"><span>Log in</span></button>					
                </form>--%>
                <%-- Business Online 5.0 --%>
                <%--<form class="business validate-form" method="POST" name="bo-form" id="bo-form">
                    <input type="hidden" id='nmUID' name="nmUID" value="" />
                    <input type="hidden" id='nmRTN' name="nmRTN" value="" />
                    <label>
                        <span>Enter AccessID</span>
                        <input type="text" name="AccessID" id="AccessID" placeholder="Enter AccessID" autocapitalize="none" autocomplete="off" required>
						<span class="error">Please Enter Your AccessID</span>
                    </label>
                    <button type="submit" class="Button1 submit"><span>Log in</span></button>
                </form>--%>
                <%-- Business Online 6.0 --%>
                <form class="business validate-form" method="POST" name="ebc-form" id="ebc-form" autocomplete="off">
                    <label>
                        <span>Enter Username</span>
                        <input type="text" name="username" id="ebc-username" placeholder="Enter Username" autocapitalize="none" autocomplete="off" required>
						<span class="error">Please Enter Your Username</span>
                    </label>
                    <label>
                        <span>Enter Password</span>
                        <input type="password" name="password" id="ebc-password" placeholder="Enter Password" autocapitalize="none" autocomplete="off" required>
						<span class="error">Please Enter Your Password</span>
                    </label>
                    <button type="submit" class="Button1 submit"><span>Log in</span></button>
					<div class="error">
						<a href="https://idemo.secureinternetbank.com/EBC_EBC1151/Login/199999996" class="Button1 submit"><span>Log in</span></a>
						<p class="message">Error, press "Log in" to continue.</p>
					</div>
                </form>
                <ul class="personal">
                    <li><a href="https://idemo.secureinternetbank.com/pbi_pbi1151/Enroll/199999996">Enroll</a></li>
                    <li><a href="https://idemo.secureinternetbank.com/pbi_pbi1151/ForgotPassword/199999996">Forgot Password</a></li>
                </ul>
                <ul class="business">
                    <li><a href="https://www.onlinebanktours.com/hybrid/businessOnline/5/pages/home.php?b=39&c=20907">View Demo</a></li>
                </ul>
				<!--a href="Other" class="Button1 other submit">Log in</a-->
				<div class="spinner"></div>
            </div>
			<div id="overlay" class="login-close"></div>

<table class="Table-Notice-Ribbon-Bottom-Right" id="Table-Notice-Personalization">
    <tbody>
        <tr>
            <td>
                <div id="personalization">
					<div id="greetingXY">
						<div class="guestWelcome" class="ellipsis"><span class="greeting">Welcome, <span class="firstname">Guest</span></span> <span class="date-and-time"> to Bank Name</span></div>
					</div>
				</div>
            </td>
        </tr>
    </tbody>
</table>

<cms:ContentWriter Runat="server" ID="SiteNotice" Name="Site Notice" />

<!-- #include file="inc_primary-nav.aspx" --></header>
        <main id="main-content" role="main">

