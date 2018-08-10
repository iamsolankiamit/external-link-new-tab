# external-link-new-tab

Useful when you need to open external url in new tab.

`window.open` will normally open external links as Popups.

## Install

```bash
$ npm install external-link-new-tab --save
```

## Usage

```js
import { openInNewTab } from 'external-link-new-tab';

openInNewTab("https://solankiamit.com")
```

## API

##### options

Type: `Object`

#### timeout

Type: `number`<br />
Default: 20

Number of milliseconds after which the new tab will open the link. (normally you won't have to change this. You have option to change it, because why not 😉)

## License

MIT © [Amit Solanki](https://solankiamit.com)
