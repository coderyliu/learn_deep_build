const { NodeSSH } = require('node-ssh')

class AutoUploadWebpackPlugin {
  constructor(options) {
    this.options = options;
    this.ssh = new NodeSSH();
  }

  apply(compiler) {
    // 监听webpack打包完成生命周期hook
    // afterEmit: 在写入到output目录后触发
    compiler.hooks.afterEmit.tapAsync('AutoUploadWebpackPlugin', async (compilation, callback) => {
      // 1. 获取打包后的文件的绝对路径
      const outputPath = compilation.outputOptions.path;
      console.log('outputPath', outputPath);

      // 2. 连接服务器
      await this.connectServer();

      // 3. 删除服务器上的文件
      await this.ssh.exec(`rm -rf ${this.options.remotePath}/*`);

      // 4. 上传文件
      await this.uploadFile(outputPath, this.options.remotePath);

      // 5. 断开连接
      this.ssh.dispose();

      // 6. 回调
      callback();
    });
  }

  // 连接服务器
  async connectServer() {
    await this.ssh.connect({
      host: this.options.host,
      username: this.options.username,
      password: this.options.password,
    });
    console.log('连接服务器成功');
  }

  // 上传文件
  async uploadFile(localPath, remotePath) {
    const status = await this.ssh.putDirectory(localPath, remotePath, {
      recursive: true, // 递归上传
      concurrency: 10, // 并发上传
    });

    if (status) {
      console.log('上传文件成功');
    } else {
      console.log('上传文件失败');
    }
  }
}

module.exports = AutoUploadWebpackPlugin;
