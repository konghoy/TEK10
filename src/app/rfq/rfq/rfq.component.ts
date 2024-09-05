import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})
export class RfqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.ui.widget.js');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.fileupload.js');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.iframe-transport.js');
    $.getScript('./assets/plugins/fancy-file-uploader/jquery.fancy-fileupload.js');
    $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    $.getScript('./assets/js/custom-file-upload.js');
  }

}
