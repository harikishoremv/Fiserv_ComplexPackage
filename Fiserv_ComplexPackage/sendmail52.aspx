<%@ Page Language="VB" Debug="true" %>
<%
    'CONFIGS
    Dim emailFrom As String = Request.Form("Email")                         'This is gathered from the input field named Email on the form page.
    Dim emailFromName As String = Request.Form("Name")                      'This is gathered from the input field named Name on the form page.
    Dim defaultEmailFrom As String = "donotreply@bankname.com"              'This is used as a valid address in case the user's address is invalid
    Dim emailTo As String = Request.Form("Email")                           'To whom is the form sent. More than one address is semi-colon followed by a space delimited.
    Dim bccTo As String = ""                                                'To whom is the form sent via BCC. More than one address is semi-colon followed by a space delimited.
    Dim emailSubject As String = "Contact Us Form"                          'What is to appear in the subject line.
    Dim successPage As String = "inc_cms-include.aspx?name=Thank+You"       'URL of the success page.
    Dim emailBody As String = ""                                            'This will be added to below
    Dim myError As String = ""
    Dim formatType = "html"                                                 'Switch from "html" to "text" to change format type.

    'CHECK TO MAKE SURE THE DEVELOPER SPECIFIED THE THREE PRESET FIELDS
    If emailFrom = "" Then
        myError = "You must provide a valid Email Address."
    End If
    If emailFrom = "" Then
        emailFrom = defaultEmailFrom
    End If
    If emailFrom <> "" And InStr(1, emailFrom, "@", vbTextCompare) = 0 Or InStr(1, emailFrom, ".", vbTextCompare) = 0 Then
        myError = "You must provide a valid Email Address."
    End If
    If emailTo = "" Then
        myError = myError & "You must provide a valid Recipient Email Address."
    End If
    If emailSubject = "" Then
        myError = myError & "You must provide a valid Message Subject."
    End If

    If myError <> "" Then
        Response.Write("<script language=""javascript"">" & vbNewLine)
        Response.Write("alert('" & myError & "');" & vbNewLine)
        Response.Write("history.go(-1);" & vbNewLine)
        Response.Write("</script>" & vbNewLine)
        Response.Write(MyError)
        Response.End()
    End If

    'BUILD THE emailBody
    If formatType = "html" Then
        emailBody = "<html>"
        emailBody = emailBody & "<head><title>Email Body</title></head>"
        emailBody = emailBody & "<body>"
        emailBody = emailBody & "<table  align='center' style='padding-top: 50px; width: 600px; font-family: Arial, sans-serif; color: #666666;'>"
        emailBody = emailBody & "<tr><td colspan='2' style='padding: 15px;background-color: #ccc;'><img src='http://whstage1.secureinternetbank.com/bankname/images/logo.png' width='250' height='105' /></td></tr>"
        For Each key As String In Request.Form.Keys
            If key <> "emailTo" And key <> "emailSubject" And LCase(key) <> "submit" Then
                emailBody = emailBody & "<tr>"
                Dim values() As String = Request.Form.GetValues(key)
                For Each value As String In values
                    'Add each to the emailBody
                    emailBody = emailBody & "<td style='background-color: #eeeeee; font-weight: bold; padding: 15px; width: 100px;'>" & key & "</td>"
                    emailBody = emailBody & "<td style='background-color: #f2f2f2; padding: 15px;'>" & value & "</td>"
                Next
                emailBody = emailBody & "</tr>"
            End If
        Next
        emailBody = emailBody & "</table>"
        emailBody = emailBody & "</body>"
        emailBody = emailBody & "</html>"
    End If

    If formatType = "text" Then
        emailBody = emailBody & emailSubject & vbNewLine & vbNewLine
        For Each key As String In Request.Form.Keys
            If key <> "emailTo" And key <> "emailSubject" And LCase(key) <> "submit" Then
                Dim values() As String = Request.Form.GetValues(key)
                For Each value As String In values
                    'Add each to the emailBody
                    emailBody = emailBody & key & ": " & value & vbNewLine
                Next
            End If
        Next  
        emailBody = emailBody & vbNewLine & vbNewLine                
    End If

    Dim mailer As New System.Net.Mail.MailMessage

    mailer.From = New Net.Mail.MailAddress(emailFrom, emailFromName)

    mailer.ReplyTo = New Net.Mail.MailAddress(emailFrom)

    Dim emailTos() As String = Split(emailTo, "; ")
    For iCounter As Integer = 0 To UBound(emailTos)
        mailer.To.Add(New Net.Mail.MailAddress(emailTos(iCounter), emailTos(iCounter)))
    Next

    If bccTo <> "" Then
        Dim bccTos() As String = Split(bccTo, "; ")
        For jCounter As Integer = 0 To UBound(bccTos)
            mailer.Bcc.Add(New Net.Mail.MailAddress(bccTos(jCounter), bccTos(jCounter)))
        Next
    End If

    mailer.Subject = emailSubject
    mailer.Body = emailBody
    If formatType = "html" Then
        mailer.IsBodyHtml = True
    End If
    If formatType = "text" Then
        mailer.IsBodyHtml = False
    End If

    Dim myClient As New System.Net.Mail.SmtpClient(ConfigurationManager.AppSettings("Cms.SmtpServer"))
    myClient.Send(mailer)

    Response.Redirect(successPage)

%>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title></title>
    </head>
    <body>
        <form id="form1" runat="server">
            <div>
            </div>
        </form>
    </body>
</html>