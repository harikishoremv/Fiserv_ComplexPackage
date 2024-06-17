using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data.SqlClient;

namespace Cms.Web.ClientSite
{
    [ToolboxData("<{0}:ContentWriter runat=server></{0}:ContentWriter>")]
    public class ContentWriter : WebControl
    {
        public string ArticleName { get; set; }

        protected override void RenderContents(HtmlTextWriter writer)
        {
            string content = GetContent();
            writer.Write(content);
        }

        private string GetContent()
        {
            string content = string.Empty;
            string connectionString = ConfigurationManager.AppSettings["ConnectionString"];

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string query = "SELECT ArticleContent FROM Articles WHERE ArticleName = @ArticleName";
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@ArticleName", ArticleName);

                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    content = reader["ArticleContent"].ToString();
                }
            }

            return content;
        }
    }
}
