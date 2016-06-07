# command lines

## pushd / popd 

文件夹的存储，切换
 
[详见](https://en.wikipedia.org/wiki/Pushd_and_popd)

[清晰](http://blog.163.com/benben_long/blog/static/199458243201211334556266/)


`pushd, popd, dirs, cd -`

```
$ pushd  [path]  // 进入目录并将当前目录存入堆栈
$ pushd  // 切换到上个目录 （$OLDPWD）
$ popd   // 出栈并进入目录
$ dirs [-v|-p|-c]
```