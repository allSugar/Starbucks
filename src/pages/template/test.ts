import { Component, Input } from '@angular/core';

@Component({
    selector: 'test',
    template: `
<h3>{{hero}} says:</h3>
<p>I, {{hero}}, am at your service, {{masterName}}.</p>
`
})
export class Test {
    @Input() hero: any;
}