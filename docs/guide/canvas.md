# Canvas

## Canvas绘制直线
```html
<body>
    <canvas id="canvas" width="600" height="500">您的浏览器当前不支持canvas</canvas>
</body>
<script>
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.lineWidth=4
    ctx.strokeStyle='orange'
    ctx.moveTo(100,100)
    ctx.lineTo(300,300)
    ctx.stroke()
    ctx.closePath()
</script>
```