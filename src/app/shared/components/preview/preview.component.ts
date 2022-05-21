import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { Hero } from '@pages/heroes/common/hero.interface';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent {
    @Input() hero!: Hero;

    setBackgroundImage(fullName: string) {
        const name = fullName.split('npc_dota_hero')[1].slice(1);

        return {
            backgroundImage: `url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name}.png")`,
            height: '127px',
            width: '225px',
        };
    }

    constructor() {}
}
