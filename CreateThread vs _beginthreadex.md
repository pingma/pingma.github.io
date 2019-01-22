## 起因
今天在看代码时，发现一个线程类在创建的时候，通过判断是否定义了"/MT"选项来选择使用_beginthread还是CreateThread来创建线程，代码类似于
```cpp
if defined (_MT)
  beginthreadex_(...);
elif !defined(_MT)
  CreateThread(...);
```
