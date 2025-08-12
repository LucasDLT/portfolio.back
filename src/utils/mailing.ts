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
        <mj-text font-style="italic" font-size="16px" font-family="Helvetica Neue" color="#626262">Gracias por comunicarte conmigo, me enviaste lo siguiente: </mj-text>
        <mj-text color="#525252">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus, sit amet suscipit nibh. Proin nec commodo purus.
          Sed eget nulla elit. Nulla aliquet mollis faucibus.</mj-text>
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
      <mj-social-element name="linkedin" href="www.linkedin.com"></mj-social-element>
    </mj-social>
  </mj-column>
            <mj-column>
         <mj-button background-color="none" href="#" color="black" font-weight="bold">Portfolio
         </mj-button>
      </mj-column>
   <mj-column>
    <mj-social>
      <mj-social-element name="github" href="www.github.com"></mj-social-element>
    </mj-social>
  </mj-column>


      
    </mj-section>
    
    <mj-section background-color="#f9F9F9">
  
    </mj-section>
    </mj-body>
</mjml>
    
    `);
