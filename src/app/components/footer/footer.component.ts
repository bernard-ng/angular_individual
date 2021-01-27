import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="row align-items-center justify-content-xl-between">
        <div class="col-12">
          <div class="copyright text-center text-xl-left text-muted">
            &copy; {{ year | date: "yyyy" }}<a href="http://goodbytes.im/" class="font-weight-bold ml-1" target="_blank">Goodbytes</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent implements OnInit {
  year: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
