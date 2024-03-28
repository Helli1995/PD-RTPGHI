# Makefile for Makefile.pdlibbuilder.


lib.name := rtpghi

rtpghi~.class.sources = src/rtpghi~.c
rtpghi~.class.sources = src/rtisi~.c

datafiles = rtpghi~-help.pd

ldlibs += -lltfat -lphaseret


PDLIBBUILDER_DIR=./pd-lib-builder
include $(PDLIBBUILDER_DIR)/Makefile.pdlibbuilder

