# git 常用操作

## 分支

**删除分支**

1.  删本地

	```
	git branch -[d|D] <the_local_branch>
	```

2.  删远程

	```
	git push origin --delete <the_remote_branch>   // Git v1.5.0 之后
	git push origin :<the_remote_branch>           // Git v1.5.0 之前
	```
