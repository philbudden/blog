FROM mcr.microsoft.com/devcontainers/ruby:1-3.3-bookworm

# Jekyll native extensions and common GitHub Pages-compatible build deps.
RUN rm -f /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
        build-essential \
        libffi-dev \
        libgmp-dev \
        libxml2-dev \
        libxslt1-dev \
        zlib1g-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
