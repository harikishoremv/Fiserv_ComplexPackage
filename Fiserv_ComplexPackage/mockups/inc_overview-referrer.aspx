<!-- Begin Referrer code -->
        <%
           Dim referrerDomainOverview As String = String.Empty
            Dim intCount As Integer
            Dim domain() As String
            domain = Split(Request.ServerVariables("HTTP_REFERER"), "/", 4)
            'Set referrerDomain to domain only
            For intCount = 2 To UBound(domain) - 1
                referrerDomainOverview = domain(intCount)
            Next
            'Set allowable domains
            If (Request.Cookies("redirect") IsNot Nothing AndAlso Request.Cookies("redirect").Value = False) Or Request.QueryString("redirect") = "false" Or referrerDomainOverview = "whdev1.secureinternetbank.com" Or referrerDomainOverview = "whdev2.secureinternetbank.com" Or referrerDomainOverview = "whstage2.secureinternetbank.com" Or referrerDomainOverview = "whstage1.secureinternetbank.com" Then
                'set cookie
                If Request.QueryString("redirect") = "false" Then
                    Dim redirectCookie As New HttpCookie("redirect", False)
                    Response.Cookies.Add(redirectCookie)
                End If
            Else
                Response.Redirect("http://whstage1.secureinternetbank.com/project-overview/XXXXX")
            End If
        %>
        <!-- End Referrer code -->
