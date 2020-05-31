# Part1-Module2 函数式编程与 JavaScript 性能优化

> 项目: 模块作业
>
> 作者: 王思哲
>
> 时间: 2020/5/31

## 简答题

### 1. 描述引用计数的工作原理和优缺点

#### 工作原理

GC 垃圾回收器会给所有对象标识一个计数标识，对象如果被新增一次引用，则该对象的引用计数+1;如果被解除一次引用，该对象的引用计数-1;当该对象的引用计数=０时，会被 GC 识别为垃圾对象;

在 GC 回收器工作时，会遍历所有对象，如果检测到某个对象为垃圾对象(引用计数=０)，会立即回收该对象的内存，遍历完成也就完成一轮垃圾回收。

#### 优点

1. 遇到垃圾对象，立即处理
2. 最大程度减少程序暂停的时间

####　缺点

1. 无法回收存在循环引用的对象
2. 频繁操作内存，性能开销大

### 2. 描述标记整理算法的工作流程

分为三个阶段：标记活动对象　& 活动对象内存位置移动 & 非活动对象内存回收

首先 GC 回收器会遍历所有对象，判定对象是否可以从根节点直接/间接通过引用、作用域链访问到(判定是否为可达对象)，若可以访问，标记为活动对象;　否则，标记为非活动对象。

完成一轮标记后，GC 会将所有活动的对象的拷贝到连续的内存块中，完成活动对象的整理。

最后，将非活动对象区域的内存整体回收，完成垃圾清除工作。

### 3. 描述Ｖ８中新生代存储区垃圾回收的流程。

新生代的垃圾回收算法有两个：复制算法，标记整理算法。

首先，执行新生代垃圾回收时，会将内部内存空间划分为等大小的两个区域，可以理解为`From`区域与`To`区域。

接着，将所有新生代对象放置到`From`内存区，执行标记整理算法，标识出所有活动对象。

接着，将`From`区域的活动对象执行复制算法，拷贝至`To`内存区中，其中有以下细节：

1. 拷贝对象时，按照连续的内存地址存放
2. 如果拷贝时，遇到以下场景会执行对象的晋升，即将对象移动至老生代区域
   2.1 拷贝对象经过了一轮 GC 还存活着，则可以晋升为老生代对象
   2.2 如果`To`区域的内存使用率超过`25%`，则直接晋升该拷贝对象

执行完对象拷贝后，交换 `From`　与　`To`　的区域，只保留这一轮的存活对象，完成内存释放

### 4. 描述标记增量算法在何时使用，及工作原理。

增量标记会在标记整理算法的第一个阶段: 标记活动对象时使用。

工作原理：在标记整理算法的遍历标记完成后，让程序继续执行，接着在程序执行与标记对象的操作交替进行，再进行一轮垃圾回收。将程序暂停时间切分成小段，减少用户对程序暂停的感知，提升垃圾回收效率。

## 代码题

见仓库的`codes`目录，思路和解题都写在里面