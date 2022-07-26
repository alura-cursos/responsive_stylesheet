# GridItem

## How to import it?

```dart
import 'package:skynexui_responsive_stylesheet/skynexui_responsive_stylesheet.dart';
```
```js
N/A
```


## How to use it?

### Dart

- `GridItem` is an abstraction to allow you to use Row and Column in a responsive way. You are able to combine it with `Responsive` and change which component will be used in a declarative way

```dart
class WidgetWithResponsiveOutput extends StatelessWidget {
  const WidgetWithResponsiveOutput({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    var responsive = Responsive(context);
    return GridItem(
          /* Here */
          as: responsive.value({
            Breakpoints.xs: Column,
            Breakpoints.md: Row,
          }),
          /* Here */
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('Button clicks:'),
          ],
        );
  }
}
```


### JavaScript

- N/A
