#!/bin/sh
esptool.py --chip esp32 --port /dev/ttyUSB0 --baud 921600 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_freq 80m --flash_size detect 0x9000 reset_nvs.bin  0xe000 ota_data_initial.bin   0x1000 bootloader.bin
