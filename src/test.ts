import * as ts from './index';

const engine = new ts.Engine();
document.body.appendChild(engine.canvas);

const stoneSprite = new ts.Sprite('./assets/stone.png');
const stone1 = new ts.GameObject();
const stone2 = new ts.GameObject();
const stone3 = new ts.GameObject();
const stone4 = new ts.GameObject();
const stone5 = new ts.GameObject();
stone1.position.set(0, 500);
stone2.position.set(64, 500);
stone3.position.set(128, 500);
stone4.position.set(192, 500);
stone1.addComponent(new ts.SpriteRenderer(stoneSprite));
stone2.addComponent(new ts.SpriteRenderer(stoneSprite));
stone3.addComponent(new ts.SpriteRenderer(stoneSprite));
stone4.addComponent(new ts.SpriteRenderer(stoneSprite));
stone5.addComponent(new ts.SpriteRenderer(stoneSprite));
stone1.addComponent(new ts.RectCollider());
stone2.addComponent(new ts.RectCollider());
stone3.addComponent(new ts.RectCollider());
stone4.addComponent(new ts.RectCollider());
stone5.addComponent(new ts.RectCollider());

const body = new ts.Body();
stone5.addComponent(body);
// console.log(stoneSprite.img);
// setInterval(() => {
//     stone1.position.set(++stone1.position.x, ++stone1.position.y);
//     console.log(stone1.position.x);
// }, 10);

// stone.addComponent(new ts.RectCollider());

engine.add(stone1);
engine.add(stone2);
engine.add(stone3);
engine.add(stone4);
engine.add(stone5);


engine.start();
// stone1.position.set(29, 29)

document.addEventListener("keyup", event => {
    if (event.key === "ArrowRight") {
        stone5.body.velocity.set(6, 0);
    } else if (event.key === "ArrowUp") {
        stone5.body.velocity.set(0, -10);
    } else if (event.key === "ArrowLeft") {
        stone5.body.velocity.set(-6, 0);
    }
});
