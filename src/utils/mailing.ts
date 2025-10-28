import mjml2html from "mjml";

export const mailingUser = mjml2html(`
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Roboto, Arial, sans-serif" />
      <mj-text color="#333333" font-size="16px" line-height="1.6" />
      <mj-button
        background-color="#000000"
        color="#ffffff"
        border-radius="6px"
        padding="12px 28px"
      />
    </mj-attributes>
  </mj-head>

  <mj-body background-color="#f4f4f4">
    <mj-section
      background-url="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGlnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
      background-size="cover"
      background-repeat="no-repeat"
      background-position="center"
      padding="60px 0"
    >
      <mj-column >
        <mj-text
          align="center"
          color="white"
          font-size="30px"
        >
          ¡Gracias por tu mensaje!
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Contenido principal -->
    <mj-section
      background-url="https://images.unsplash.com/photo-1603346133929-24265debae88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
      padding="30px 25px"
    >
      <mj-column width="500px" background-color="#60606040" border-radius="5px">
        <mj-text color="white"> Hola <strong>{{name}}</strong>, </mj-text>

        <mj-text color="white" >
          Gracias por comunicarte conmigo. Me escribiste lo siguiente:
        </mj-text>

        <mj-text color="white" font-style="italic" padding="10px 0 20px 0" align="center">
          {{message}}
        </mj-text>

        <mj-text color="white">
          En breve te estaré respondiendo.
          <br />
          ¡Aprecio mucho tu interés en mi trabajo!
        </mj-text>

        <mj-text color="white" padding-top="15px"> — Lucas Sebas </mj-text>
      </mj-column>
      <mj-column>
        <mj-text
          align="center"
          color="black"
          font-size="18px"
        >
         Desarrollador Web  Diseñando Experiencias 
        </mj-text>
      </mj-column>
    </mj-section>



    <!-- Footer con enlaces -->
    <mj-section 
    background-url="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGlnb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"  
    background-size="cover"
      background-repeat="no-repeat"
      background-position="bottom"
      padding="1px 0 0 0">
      <mj-group>
        <mj-column width="33%">
          <mj-social icon-size="24px" mode="horizontal" align="center">
            <mj-social-element
              name="linkedin"
              href="https://www.linkedin.com/lucas-sebas/"
              background-color="transparent"
            ></mj-social-element>
          </mj-social>
        </mj-column>

        <mj-column width="33%" vertical-align="middle">
          <mj-button
            href="https://lucasebasdev.vercel.app/"
            border="1px solid #c6c5c5ff"
            background-color="#606060"
            color="black"
          >
            Portfolio
          </mj-button>
        </mj-column>

        <mj-column width="33%">
          <mj-social icon-size="24px" mode="horizontal" align="center">
            <mj-social-element
              name="github"
              href="https://github.com/LucasDLT"
              background-color="transparent"
            ></mj-social-element>
          </mj-social>
        </mj-column>
      </mj-group>
    </mj-section>

    <!-- Pie legal -->
    <mj-section background-color="black" padding="10px">
      <mj-column>
        <mj-text align="center" font-size="12px" color="#999999">
          © 2025 Lucas Sebas Dev. Todos los derechos reservados.
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>

    
    `);

export const mailingAdmin = mjml2html(`
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Roboto, Arial, sans-serif" />
      <mj-text color="#333333" font-size="16px" line-height="1.6" />
      <mj-button
        background-color="#000000"
        color="#ffffff"
        border-radius="6px"
        padding="12px 28px"
      />
    </mj-attributes>
  </mj-head>

  <mj-body background-color="#f4f4f4">
    <!-- Header -->
    <mj-section background-color="#171717" padding="25px 0">
      <mj-column>
        <mj-text
          align="center"
          color="#ffffff"
          font-size="22px"
          font-weight="bold"
          text-transform="uppercase"
        >
          📩 Mensaje desde tu Portfolio
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Imagen superior -->
    <mj-section
      background-url="https://images.unsplash.com/photo-1584384689201-e0bcbe2c7f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
      background-size="cover"
      background-repeat="no-repeat"
      background-position="center"
      padding="60px 0"
    >
      <mj-column>
        <mj-text
          align="center"
          color="#ffffff"
          font-size="34px"
          font-weight="bold"
          text-shadow="0px 1px 3px #000"
        >
          Nuevo contacto recibido
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Cuerpo principal -->
    <mj-section
      background-url="https://images.unsplash.com/photo-1603346133929-24265debae88?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687"
      padding="30px 25px"
      background-size="cover"
      background-repeat="no-repeat"
      background-position="center"
    >
      <!-- Mensaje -->
      <mj-column width="500px" background-color="#00000080" border-radius="8px" padding="20px">
        <mj-text color="#ffffff">
          <strong>{{name}}</strong> te envió el siguiente mensaje:
        </mj-text>

        <mj-text color="#ffffff" font-style="italic" padding="10px 0 20px 0" align="center">
          "{{message}}"
        </mj-text>

        <mj-text color="#ffffff">
          No olvides responderle para confirmar la recepción.
        </mj-text>

        <mj-text color="#ffffff" padding-top="15px">
          — Lucas Sebas
        </mj-text>
      </mj-column>

      <!-- Datos de contacto -->
      <mj-column width="280px" background-color="#171717cc" border-radius="8px" padding="20px">
        <mj-text
          align="center"
          color="#ffffff"
          font-size="18px"
          font-weight="bold"
        >
          Datos de contacto
        </mj-text>
        <mj-divider border-color="#444444" width="80%" />
        <mj-text color="#dddddd" font-size="14px" line-height="1.6" align="center">
          📧 <strong>{{email}}</strong><br />
          📱 <strong>{{phone}}</strong>
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Imagen inferior (continuación visual) -->
    <mj-section
      background-url="https://images.unsplash.com/photo-1584384689201-e0bcbe2c7f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
      background-size="cover"
      background-repeat="no-repeat"
      background-position="center bottom"
      padding="50px 0"
    >
      <mj-column>
        <mj-text
          align="center"
          color="#ffffff"
          font-size="20px"
          text-shadow="0px 1px 3px #000"
        >
          Lucas Sebas Dev
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Footer -->
    <mj-section background-color="#171717" padding="20px 0">
      <mj-column>
        <mj-text align="center" color="#999999" font-size="13px">
          © 2025 Lucas Sebas Dev — Todos los derechos reservados.
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>

    `);
