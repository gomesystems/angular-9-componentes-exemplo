import { Component } from '@angular/core';

@Component({
  selector: 'app-styled',
  template: `
    <!-- <style>
      h1 {
        font-weight: normal;
      }
      .content {
        background-color: lime;
        padding: 20px;
        margin: 10px;
        border: solid 1px silver;
      }
    </style> -->
    <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous">

    <div class="container">
      <div class="jumbotron">
        <h1>Styled Component</h1>
        <p>The content all goes here.</p>
      </div>
    </div>
  `,
  // styles: [
  //   'h1 { font-weight: normal; }',
  //   '.content { background-color: lime; padding: 20px; margin: 10px; border: solid 1px silver; }'
  // ]
})
export class StyledComponent {
/* . . . */
}
