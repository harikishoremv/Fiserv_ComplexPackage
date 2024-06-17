<%
    Dim lang = "en"
    If Not Request.Cookies("language") Is Nothing Then
        lang = Request.Cookies("language").Value
    End If
    Response.Write(lang)
%>