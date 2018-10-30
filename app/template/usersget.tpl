<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<head>
<link rel="stylesheet" href="https://unpkg.com/chota@latest">
</head>
<body>
  <div id="top" class="container" role="document">
    
    <main role="main">
      <div class="row">
        <div class="col"> 
          <form action="http://localhost:3009/factor/users" method="get">
            <fieldset id="forms__input">
              <legend>Filtros GET</legend>
              <p>
                <label for="name">Nome:</label>
                <input id="name" name="name" type="text" value="[name]" placeholder="Text Input">
              </p>
              <p>
                <button type="submit">Enviar</button>
              </p>
            </fieldset>
          </form>    
        </div>  
        <div class="col"> 
          <h2>Usuários Cadastrados</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="users/user">
              <tr>
                <td><xsl:value-of select="username"/></td>
                <td><xsl:value-of select="email"/></td>
              </tr>
              </xsl:for-each>
            </tbody>
            <tfoot>
              <tr>
                <th>Title</th>
                <th>Artist</th>
              </tr>
            </tfoot>
          </table>
        </div>  
      </div>
    </main>
    <footer>
      <p><a href="#top">[Top]</a></p>
    </footer>
  </div>
</tbody>
</html>
</xsl:template>
</xsl:stylesheet>