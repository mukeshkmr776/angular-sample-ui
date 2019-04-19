import { animate, animateChild, group, query, style, transition, trigger, state } from '@angular/animations';


export const Animations = [
    trigger('routerTransitionFade', [
        transition('* => *', group([
        query(':enter', [
            style({
                opacity: 0
            })
        ], {
            optional: true
        }),
        query(':leave', [
            style({
                opacity: 1
            }),
            animate('500ms cubic-bezier(0.0, 0.0, 0.2, 1)',
            style({
                opacity: 0
            }))
        ], {
            optional: true
        }),
        query(':enter', [
            style({
                opacity: 0
            }),
            animate('500ms cubic-bezier(0.0, 0.0, 0.2, 1)',
            style({
                opacity: 1
            }))
        ], {
            optional: true
        }),
        query(':enter', animateChild(), {
            optional: true
        }),
        query(':leave', animateChild(), {
            optional: true
        })
        ]))
    ]),

    trigger('myAnimation', [
        transition('* => *', [
            query(':enter', [
            style({
                opacity: 0,
                overflow: 'hidden'
            })
            ], {
            optional: true
            }),
            query(':leave', [
            style({
                opacity: 1
            }),
            animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)',
                style({
                opacity: 0,
                overflow: 'hidden'
                }))
            ], {
            optional: true
            }),
            query(':enter', [
            style({
                opacity: 0,
                overflow: 'hidden'
            }),
            animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)',
                style({
                opacity: 1,
                overflow: 'hidden'

                }))
            ], {
            optional: true
            }),
            query(':enter', animateChild(), {
            optional: true
            }),
            query(':leave', animateChild(), {
            optional: true
            })
        ])
    ])
];
