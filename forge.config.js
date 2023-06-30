module.exports = {
  packagerConfig: {
    asar: true,
    icon: 'assets/icon',
    appBundleId: 'whatsapp2'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: 'assets/icon.ico'
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
