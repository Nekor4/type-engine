import * as ts from './index';

const engine = new ts.Engine();
document.body.appendChild(engine.canvas);

const stoneSprite = new ts.Sprite('./assets/stone.png');
const stoneSpriteLong = new ts.Sprite('./assets/stone.png', 700, 300);

const stone1 = new ts.GameObject();
const stone2 = new ts.GameObject();
stone1.position.set(20, 500);
stone2.position.set(64, 100);
stone1.addComponent(new ts.SpriteRenderer(stoneSpriteLong));
stone2.addComponent(new ts.SpriteRenderer(stoneSprite));
stone1.addComponent(new ts.RectCollider());
stone2.addComponent(new ts.RectCollider());

const body = new ts.Body();
stone2.addComponent(body);
// console.log(stoneSprite.img);
// setInterval(() => {
//     stone1.position.set(++stone1.position.x, ++stone1.position.y);
//     console.log(stone1.position.x);
// }, 10);

// stone.addComponent(new ts.RectCollider());

engine.add(stone1);
engine.add(stone2);

engine.start();
// stone1.position.set(29, 29)

document.addEventListener("keyup", event => {
    if (event.key === "ArrowRight") {
        stone2.body.velocity.set(6, 0);
    } else if (event.key === "ArrowUp") {
        stone2.body.velocity.set(0, -10);
    } else if (event.key === "ArrowLeft") {
        stone2.body.velocity.set(-6, 0);
    }
});
