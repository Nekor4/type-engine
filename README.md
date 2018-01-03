# TypeEngine

Game Engine writen in TypeScript.

## Getting Started

Include the TypeEngine in your project.

```
<script src="type-engine.min.js"></script>
```

### To init new instance of engine: 
```
const engine = new ts.Engnie();
```

### To create new game object:
```
const gameObject = new ts.GameObject();
```

### You can set game object position by:
```
gameObject.postition.set(10, -10);
```
### To render sprite:
```
const sprite = new ts.Sprite('path/to/img.jpg');
gameObject.addComponent(new ts.SpriteRenderer(sprite));
```
### To add game object to game loop:
```
engnie.add(gameObject);
```
### To start game loop:
```
engnie.start();
```
### To pauze game loop: 
```
engine.pauze();
```