import mjml2html from "mjml";

export const mailingUser = mjml2html(`
<mjml>
    <mj-body>

        <mj-section background-color="#f9F9F9">
             <mj-column>
                <mj-text font-size="20px" color="#626262">Ls</mj-text>
            </mj-column>
        </mj-section>

        <mj-section background-url="https://images.unsplash.com/photo-1584384689201-e0bcbe2c7f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxzdkxubll3dXIzWXx8ZW58MHx8fHx8" background-size="cover" background-size="cover" background-repeat="no-repeat" >
             <mj-column width="600px">
               <mj-text align="center" color="black" font-size="40px"  font-family="roboto"> Full Stack Developer</mj-text>
             </mj-column>
        </mj-section>

    
    <mj-section background-color="#fafafa">
      <mj-column width="400px">
        <mj-text font-style="italic" font-size="16px" font-family="Helvetica Neue" color="#626262">"Gracias por comunicarte conmigo {{name}}, me enviaste lo siguiente:" </mj-text>
        <mj-text color="#525252">{{message}}.</mj-text>
        <mj-text font-style="italic" font-size="16px" font-family="Helvetica Neue" color="#626262">
          Te contestare a la brevedad. Saludos
        </mj-text>
       

      </mj-column>
    </mj-section>
    
    <mj-raw>
      <!-- Portfolio button-->
    </mj-raw>
    <mj-section background-url="https://images.unsplash.com/photo-1553044014-a729eac4af74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDR8NDMwNDcxfHxlbnwwfHx8fHw%3D" background-repeat="no-repeat" >
      <mj-column>
    <mj-social>
      <mj-social-element name="linkedin" href="https://www.linkedin.com/in/lucas-sebas/"></mj-social-element>
    </mj-social>
  </mj-column>
            <mj-column>
         <mj-button background-color="none" href="#" color="black" font-weight="bold">Portfolio
         </mj-button>
      </mj-column>
   <mj-column>
    <mj-social>
      <mj-social-element name="github" href="https://github.com/LucasDLT"></mj-social-element>
    </mj-social>
  </mj-column>


      
    </mj-section>
    
    <mj-section background-color="#f9F9F9">
  
    </mj-section>
    </mj-body>
</mjml>
    
    `);

export const mailingAdmin = mjml2html(`
    <mjml>
    <mj-body>

        <mj-section background-color="#f9F9F9">
             <mj-column>
                <mj-text font-size="20px" color="#626262">Msje Desde tu Portfolio</mj-text>
            </mj-column>
        </mj-section>
<mj-section background-url="https://images.unsplash.com/photo-1584384689201-e0bcbe2c7f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxzdkxubll3dXIzWXx8ZW58MHx8fHx8" background-size="cover" background-size="cover" background-repeat="no-repeat" >

    </mj-section>
    
    <mj-section background-color="#fafafa">
      <mj-column width="400px">
        <mj-text font-style="roboto" font-size="16px" font-family="Helvetica Neue" color="#626262">{{name}} te escribe lo siguiente: </mj-text>
        <mj-text color="#525252">{{message}}.</mj-text>
          No te olvides de contestarle que recibiste el mensaje. 
        </mj-text>
       

      </mj-column>
      <mj-column background-color="#171717fd">
        <mj-text font-weight="bold" font-family="roboto" color="#c2c2c2ff">Sus datos para que te comuniques:</mj-text>
        <mj-text font-weight="bold" font-family="roboto" color="#c2c2c2ff">Correo: {{email}}.</mj-text>
        <mj-text font-weight="bold" font-family="roboto" color="#c2c2c2ff">Telefono: {{phone}}.</mj-text>
      </mj-column>
    </mj-section>
    

    <mj-section background-url="https://images.unsplash.com/photo-1553044014-a729eac4af74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDR8NDMwNDcxfHxlbnwwfHx8fHw%3D" background-repeat="no-repeat" >
          
    </mj-section>
    </mj-body>
</mjml>
    `);
