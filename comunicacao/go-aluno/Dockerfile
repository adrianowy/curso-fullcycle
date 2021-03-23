FROM golang

WORKDIR /usr/src/app

RUN apt-get update && apt install -y protobuf-compiler

# RUN cd /usr/src/app && go get google.golang.org/protobuf/cmd/protoc-gen-go
# RUN cd /usr/src/app && go install google.golang.org/protobuf/cmd/protoc-gen-go

# RUN cd /usr/src/app && go get google.golang.org/grpc/cmd/protoc-gen-go-grpc
# RUN cd /usr/src/app && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc

# PATH="/go/bin:$PATH"
# source ~/.bashrc

# protoc --proto_path=proto proto/*.proto --go_out=pb 

EXPOSE 5000