# 数据可视化
在我们当下使用的各种类型不同的产品中，往往我们都会看到数据的展示图形，例如：散点图、热图、直方图、树图、雷达图等等，这些图形之间看似没有任何关系的，但其本质上都有一个共同的特征，比如图形最终呈现的其实是基于数据所绘制出来的一个结果。这种把数据经过一定转换之后变成图形显示的操作就是数据可视化。

知道什么是数据可视化之后，再看一下数据的类型。这里的类型指的是被展示的数据的分类，可以根据数据的分类是否为数值把数据分为定量数据和定性数据两大类。

* 定量数据即数值类型，可以分为连续性变量和离散变量。
* 定性数据一般指的是本文描述，可以根据它有没有顺序继续划分为有序变量和无序变量两种。

例如下面数据分类的展示：
| 数据 |   数据类型  |  说明  |
| ---- | -------- | -------- |
|11010、10086、10000| 定量数据/离散数值 | 取值来自于有限或可数的集合 |
|篮球、足球、排球 | 定性数据/无序分类 | 数据没无序且不同数据无关联 |
| 及格、不及格、良好、优秀 | 定性数据/有序分类 | 数据有序且不同数据有比较关系 |
| 100m、200m、300m | 定量数据/连续性数据 | 数据可以是实数域的任意值 |
| 赞同科技 | 文本数据 | 任意格式文本、视情况分类 |
| Jan.1 1970, 00:00:00 am | 日期/时间 | 特定的日期或时间 |

知道了数据可视化和数据分类之后，就要看如何把数据转换为图形。它的核心就是在图表上从不同的维度来展示数据，从而生成一个图示来体现数据的展示图。

例如我们用一组数据来表示未来的气温
```js
[
  {
    name: '最低气温',
    data: [1,-20,2,5,13,8,0]
  },
  {
    name: '最高气温',
    data: [10,4,12,15,26,27,10]
  }
]
```
数据转换图形的步骤：
* 执行映射将数据与不同标度对应，这里的标度比如说图形的形状、大小、颜色以及线条的宽度等等。
* 选择合适的图形形状将映射体现出来

那么把上述的温度值映射到y轴上，把每天的日期映射到x轴上，使用线条来显示数据。那么就得到如图所示的折线图。

![](/images/1.png)

然后我们再添加多个城市的气温
```js
[
  {
    '北京': [
      {
        name: '最低气温',
        data: [1,-20,2,5,13,8,0]
      },
      {
        name: '最高气温',
        data: [10,4,12,15,26,27,10]
      }
    ]
  },
  {
    '上海': [
      {
        name: '最低气温',
        data: [1,-20,2,5,13,8,0]
      },
      {
        name: '最高气温',
        data: [10,4,12,15,26,27,10]
      }
    ]
  },
  {
    '广州': [
      {
        name: '最低气温',
        data: [1,-20,2,5,13,8,0]
      },
      {
        name: '最高气温',
        data: [10,4,12,15,26,27,10]
      }
    ]
  }
]
```
这时将城市放在y轴上，气温选用颜色标度来显示，使用正方形来可视化数据，最终得到热图。

![](/images/2.png)

## 坐标轴
坐标轴是执行数据可视化展示的第一步操作，一般来讲我们通过图形来展示数据，我们首先会绘制一个坐标轴，使用坐标轴来定位数据的位置标度，而位置标度决定了数据在图片中哪个位置上进行展示。对于一个常规的2D图形来说，需要由两个变量来定义一个点，也就是我们常用的x轴和y轴。有了这两个标度之后，我们还需要去制定这两个标度的相对位置，常规来说x轴和y轴是垂直的，当然这也不是唯一的情况，比如y轴相对于x轴也可以有角度。使用这两个位置标度再加上相对位置就构成了坐标系，在我们去执行数据可视化操作中，应用最广的还是直角坐标系。

![](/images/3.png)

这个坐标系是由数学家笛卡尔发明的，因此也叫作笛卡尔坐标系。就像上图中展示的那样，有了坐标系之后就可以考虑将数据在x轴和y轴上进行展示，这个时候就需要使用数据单位，例如温度就有摄氏和华氏温度，长度有公里、千米等单位。在坐标系中沿着不同方向存在着网格间距，这个间距就是单元数据的离散度长，例如在长度范围内每隔一公里或者一厘米等数据单元就去设置一条网格线，然后将不同数据的属性再去映射到x轴或y轴，然后再配置其他的图形就可以展示数据。

对于图中演示的直角坐标系来说，如果沿轴的网格线在数据单位和结果可视化中是均等分布的，那么就可以将坐标系中的位置比例称之为是线性的，线性的标度通常可以提供非常准确的数据展示，但是在某些情况下非线性的展示可以更好的呈现数据的分布，因为数据的规律可能不是线性的规律，例如我们展示一组对数函数，我们采用线性的方式来展示，那么数据的跨度会非常的大，如果采用非线性的方式，会更好的展示数据的分布。

当然这里我们只需要知道直角坐标系分为线性和非线性两种坐标轴。除了直角还有其他类型的坐标系，其中轴本身就是弯曲的不像x轴和y轴那样直来直去的，特别是在极坐标系，通过角度和距离原点相近的距离来指定位置，这时候角度轴就是圆形的。一般情况下极坐标系用于周期性的数据展示，这样就可以将刻度一端的数据值逻辑与另一端的数据值进行连接。例如一年当中的天数12月31日是一年当中的最后一天也是一年当中的第一天，如果要显示一年当中的变化情况，那就可以将极坐标与指定每天的角度坐标一起进行使用。还有常见非直角坐标系的展示就是地理空间的数据展示，由于地球是一个球体，使用直角来绘制经纬度很容易误解，此时采用非线性规则会更好一些。

![](/images/4.png)

## 颜色标度
在数据可视化的展示中，除了坐标系之外，印象最深的可能就是不同的形状以及色彩丰富的颜色，我们采用颜色作为标度，一般有如下几个作用：
* 用颜色来对数据进行分组
* 指定不同的颜色来对应不同的数据
* 们在一组数据中定义一个特殊的颜色，让这组数据中的某一个更加突出显示

具体看一下使用颜色对数据进行分组的操作，这种情况下一般是使用颜色来区分没有顺序的离散分组。比如地图上会有不同的国家，不同硬件的生产厂商等等，这样就可以使用一类特定的颜色来对应的特定数据，这个颜色彼此都是不相同的，但是每个颜色与其他的颜色相比不会太突出。

![](/images/5.png)

除了使用颜色对数据分组之外，也可以用颜色来表示数据，例如温度的度数，湿度等等数值型的。
![](/images/6.png)

在数据集当中可能存在特定的类别，或者说特定的值，其中包含我们想要表述内容的关键信息，这时我们可以使用一种或多种颜色来对图形元素的内容进行着色，而在这时我们可以重点强调其中的一种颜色，从而把它所对应的颜色在所有图形当中展示出来。例如基于极坐标系提供的饼状图，选用同一个色系中不同的饱和度来作为区分。

![](/images/7.png)

总体来说颜色是可视化当中重要的一个数据展示标度，可以实现数据分组、展示、突出展示。

## 前端数据可视化方案
下面这张图可以看出在当前前端项目的浏览器的下层存在着不同的绘图引擎，例如Skia和OpenGL，Skia是安卓和Chrome平台底层提供的2D绘图引擎，OpenGL是一个开放的2D和3D的图形渲染库，相比Skia它的功能更加强大。不论当前我们是基于哪一种引擎，它都向上层开放了Canvas、Svg、WebGL和HTML这样绘图的能力。

![](/images/8.png)

其上层还有D3、zrender、three.js这样的图形绘制库，其中zrender底层就是canvas，D3是用来操作Svg，three.js可以去配合WebGL进行使用，将单一api进行封装，使用更加方便。

而在实际项目中我们可能使用更多的是最上层的可视化的图形库，例如Highcharts、Echarts、AntV，它们的内部已经把不同的可视化展示绘制操作都提前实现了，我们只需要进行相应的api调用即可。同时它们提供了更好的交互以及展示动画，

如果我们想深入研究可视化的实现，那就需要从Canvas、Svg、WebGL的使用开始研究。

## 数据大屏
* [DataV](https://github.com/DataV-Team/DataV)